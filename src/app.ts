
import fs from "fs"
import os from "os"
import Koa from "koa"
// import route from "koa-route"
import WebSocket from "koa-websocket"

const app = WebSocket(new Koa())
const ctxs: any[] = []
let fileNames: any[] = []
let storages: any = {}
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

const recursiveFiles = ({ files, callback, ctx, complete, i = 0 }: any) => {
    const file = files[i]
    let index = 0
    if (!file) return
    ctx.websocket.send(`开始输出-文件==> ${file}`)
    storages[file] = []
    readStream(file, (data: any) => {
        if (!storages[file][index]) {
            storages[file][index] = data
            if (callback) callback(data)
        }
        index++
    }, () => {
        ctx.websocket.send(`输出结束-文件==> ${file}`)
        i++
        if (i < files.length)
            recursiveFiles({ files, callback, ctx, complete, i })
        else
            complete()
    })
}

const broadcast = (data: string) => {
    ctxs.forEach((v) => {
        v.websocket.send(data)
    })
}

const removeFiles = (files: any[]) => {
    files.forEach(v => {
        fs.unlink(targetPath + v, (err) => {
            if (err) throw err
        })
    })
    files = []
}

// fs.readdir(targetPath, (err, files) => {
//     if (err) throw err
//     fileNames = files
//     // removeFiles(fileNames)
//     console.log(fileNames)
// })

app.ws.use((ctx) => {
    let flag = true
    let files: any[] = []
    ctxs.push(ctx)
    ctx.websocket.send(`当前角色id：${ctx.query.id}`)
    broadcast(`当前连接人数：${ctxs.length}`)

    fs.watch(targetPath, (event, filename) => {
        if (event == "change") {
            if (fileNames.indexOf(filename) == -1) {
                fileNames.push(filename)
            }
        }
    })

    setInterval(() => {
        if (flag && fileNames.length) {
            flag = false
            files[0] = fileNames[fileNames.length - 2]
            files[1] = fileNames[fileNames.length - 1]
            recursiveFiles({
                files,
                ctx,
                callback(data: any) {
                    ctx.websocket.send(data)
                },
                complete() {
                    flag = true
                }
            })
        }
    }, 1000)

    ctx.websocket.on("message", (message) => {
        console.log("message", message)
        // ctx.websocket.send(`收到客户端：${message}`)
    })

    ctx.websocket.on("close", (code, reason) => {
        console.log("close", code, reason)
        let index = ctxs.indexOf(ctx)
        ctxs.splice(index, 1)
        broadcast(`当前连接人数：${ctxs.length}`)
        removeFiles(fileNames)
    })

})

console.log("服务启动，开启端口80")

