
import fs from "fs"
import os from "os"
import Koa from "koa"
// import route from "koa-route"
import WebSocket from "koa-websocket"

const app = WebSocket(new Koa())
const ctxs: any[] = []
let fileArr: any[] = []
let targetPath = os.platform() == "win32" ? "./data/" : "../../record/"
app.listen(80)

const readStream = (filename: string, callback: Function, complete: Function) => {

    const stream = fs.createReadStream(targetPath + filename)
    stream.on('open', (fd) => {
        console.log('开始读取文件', fd)
    })
    stream.on('data', (data) => {
        console.log('读取到数据：')
        console.log(data)
        if (callback) callback(data)
    })
    stream.on('end', () => {
        console.log('文件已全部读取完毕')
        stream.close()
        if (complete) complete()
    })
    stream.on('close', () => {
        console.log('文件被关闭')
    })
    stream.on('error', (err) => {
        console.log('读取文件失败', err)
    })

}

const recursiveFiles = (files: any[], callback: Function, ctx: any, i: number = 0) => {
    ctx.websocket.send(`开始输出-文件==> ${files[i]}`)
    readStream(files[i], (data: any) => {
        if (callback) callback(data)
    }, () => {
        ctx.websocket.send(`输出结束-文件==> ${files[i]}`)
        i++
        if (i < files.length) recursiveFiles(files, callback, ctx, i)
    })
}

const broadcast = (data: string) => {
    ctxs.forEach((v) => {
        v.websocket.send(data)
    })
}

fs.readdir(targetPath, (err, files) => {
    if (err) throw err
    fileArr = files
    console.log(files)
})

app.ws.use((ctx) => {

    ctxs.push(ctx)
    console.log("当前角色id：", ctx.query.id)
    console.log("当前连接人数：", ctxs.length)
    ctx.websocket.send(`当前角色id：${ctx.query.id}`)
    broadcast(`当前连接人数：${ctxs.length}`)

    recursiveFiles(fileArr, (data: any) => {
        ctx.websocket.send(data)
    }, ctx)

    ctx.websocket.on("message", (message) => {
        console.log("message", message)
        // ctx.websocket.send(`收到客户端：${message}`)
    })

    ctx.websocket.on("close", (code, reason) => {
        console.log("close", code, reason)
        let index = ctxs.indexOf(ctx)
        ctxs.splice(index, 1)
        broadcast(`当前连接人数：${ctxs.length}`)
    })

})

console.log("服务启动，开启端口80")

