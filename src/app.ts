import fs from "fs"
import Koa from "koa"
import route from "koa-route"
import WebSocket from "koa-websocket"
import { fsCopy, fsRemove, throwErr } from "./utils/util"
import { exec } from "child_process"
// import api from "./utils/api"
import { targetPath, audioPath, primaryPath, port } from "./config"

const koa = new Koa()
const app = WebSocket(koa)
const users: any[] = []
const onlines: any[] = []
const videos: any[] = []

const wsIsClose = (ctx: Koa.Context) => ctx.websocket.readyState !== 1

// websocket发送消息
const broadcast = (type: string, options: object | void) => {
    const params = (options as any)
    let msg: any
    let filterArr: any[] = []
    switch (type) {
        case "onlineIds": {
            msg = []
            onlines.forEach((v) => msg.push(v.userId))
            filterArr = onlines
        } break
        case "video": {
            msg = params
            filterArr = onlines.filter(v => v.userId == params.acceptId)
        } break
        case "refusal": {
            const acceptId = params.acceptId
            const sendId = params.sendId
            msg = 1
            filterArr = onlines.filter(v => v.userId == acceptId || v.userId == sendId)
        } break
        case "open": {
            const acceptId = params.acceptId
            const sendId = params.sendId
            msg = []
            filterArr = onlines.filter(v => v.userId == acceptId || v.userId == sendId)
            filterArr.forEach(v => msg.push(v.userId))
            msg.reverse()
            filterArr.forEach((v) => {
                if (!wsIsClose(v.ctx)) v.ctx.websocket.send(JSON.stringify({ [type]: params }))
            })
            filterArr = []
        } break
        case "end": {
            let video: any = videos.filter(v => params.userId == v.sendId || params.userId == v.acceptId)
            msg = 1
            filterArr = []
            if (video.length) {
                videos.splice(videos.indexOf(video), 1)
                video = video[0]
                filterArr = onlines.filter(v => params.userId == video.sendId ? v.userId == video.acceptId : v.userId == video.sendId)
            }
        } break
        case "editPaint":
        case "savePaint": {
            const videoId = params.videoId
            const video = videos.filter(v => v.videoId == videoId)[0]
            const userId = params.userId == video.sendId ? video.acceptId : video.sendId
            msg = 1
            filterArr = onlines.filter(v => v.userId == userId)
        } break
        case "updatePaint": {
            const videoId = params.videoId
            const picBase64 = params.picBase64
            const video = videos.filter(v => v.videoId == videoId)[0]
            msg = { picBase64 }
            filterArr = onlines.filter(v => v.userId == video.sendId || v.userId == video.acceptId)
        } break
    }
    msg = JSON.stringify({ [type]: msg })
    console.log(type, filterArr.length, msg)
    filterArr.forEach((v) => wsIsClose(v.ctx) ? "" : v.ctx.websocket.send(msg))
}

// api.use(koa)

koa.use(async (ctx, next: any) => {
    await ctx.set('Access-Control-Allow-Origin', '*')
    await next(ctx)
})

koa.use(route.get(primaryPath + 'hi', (ctx) => {
    ctx.body = {
        isok: true
    }
}))

app.ws.use(async (ctx, next: Function) => await next(ctx))

//监听nginx生成音频文件目录
fs.watch(targetPath, (event, filename) => {
    let audioNames: string[]
    let audioName: string
    if (event === "change" && filename.indexOf(".wav") > -1) {
        users.forEach((v) => {
            audioNames = v.audioNames
            if (filename.indexOf(`userId${v.userId}`) > -1 && audioNames.indexOf(filename) < 0) {
                audioNames.push(filename)
                console.log(`userId==>${v.userId}   filename==>${filename}  namelen==>${audioNames.length}`)
                if (audioNames.length > 1) {
                    filename = audioNames[audioNames.length - 2]
                    audioName = filename.split(".wav")[0]
                    fs.mkdir(`${audioPath}${audioName}`, (err) => {
                        if (throwErr(err)) return
                        fsCopy(targetPath + filename, `${audioPath}${audioName}/${filename}`)
                        exec(`cd bin && ./Demo.sh 1 1 ../${audioPath}${audioName}`, (err, stdout, srderr) => {
                            if (err) {
                                console.log(srderr)
                            } else {
                                console.log("输出内容：")
                                // console.log(stdout)
                                if (!wsIsClose(v.ctx)) v.ctx.websocket.send(stdout)
                                fsRemove(`${audioPath}${audioName}/`)
                            }
                        })
                    })
                }
            }
        })
    }
})

//连接双方视频通话时所用的websocket
app.ws.use(route.all(primaryPath + 'video', (ctx) => {

    const userId = encodeURIComponent(ctx.query.userId)
    const user = {
        ctx,
        userId,
        audioNames: []
    }
    users.push(user)

    console.log(`当前角色id：${userId}`)
    console.log(`当前连接人数：${users.length}`)

    ctx.websocket.on("message", (message) => {
        console.log("message", message)
    })

    ctx.websocket.on("close", (code, reason) => {
        console.log("close", code, reason)
        users.splice(users.indexOf(user), 1)
        broadcast("end", { userId: ctx.query.userId })
    })

}))

//连接用户记录各种状态的websocket
app.ws.use(route.all(primaryPath + 'ws', (ctx) => {

    const userId = ctx.query.userId
    const online = {
        ctx,
        userId,
        relativeUserId: ""
    }

    if (!onlines.filter(v => v.userId === online.userId).length) onlines.push(online)
    console.log(onlines.length)
    broadcast("onlineIds")

    // api.ctrl.addVideo.callback = async (videoRes: any) => {
    //     console.log(videoRes)
    //     broadcast("video", { video: videoRes })
    //     videos.push(videoRes.data[0])
    // }

    ctx.websocket.on("message", (msg: any) => {
        console.log("message", msg)
        let type: string = ""
        msg = JSON.parse(msg)
        if (msg.video) {
            type = "video"
            msg = msg.video
        }
        if (msg.refusal) {
            type = "refusal"
            msg = { sendId: msg[type].sendId, acceptId: msg[type].acceptId }
        }
        if (msg.open) {
            type = "open"
            msg = msg.open
            videos.push(msg)
            // msg = { sendId: msg[type].sendId, acceptId: msg[type].acceptId, videoId: msg[type].videoId, outline: msg[type].outline }
        }
        if (msg.editPaint) {
            type = "editPaint"
            msg = { videoId: msg[type].videoId, userId: msg[type].userId }
        }
        if (msg.savePaint) {
            type = "savePaint"
            msg = { videoId: msg[type].videoId, userId: msg[type].userId }
        }
        if (msg.updatePaint) {
            type = "updatePaint"
            msg = { videoId: msg[type].videoId, picBase64: msg[type].picBase64 }
        }
        if (type) broadcast(type, msg)
    })

    ctx.websocket.on("close", (code, reason) => {
        console.log("close", code, reason, online.userId)
        onlines.forEach((v, i) => {
            if (v.userId == online.userId) onlines.splice(i, 1)
        })
        broadcast("onlineIds")
    })

}))

app.listen(port)

console.log(`服务启动，开启端口${port}`)