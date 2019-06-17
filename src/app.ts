
import fs from "fs"
import Koa from "koa"
import os from "os"
import route from "koa-route"
import WebSocket from "koa-websocket"
import koabody from "koa-body"

// import { readStream, recursive } from "./utils/util"

const koa = new Koa()
const app = WebSocket(koa)
const ctxs: Koa.Context[] = []
// let fileNames: string[] = []
// let storages: any = {}
let targetPath = os.platform() == "win32" ? "data/" : "../../record/"

koa.use(koabody({
    multipart: true,
    formidable: {
        maxFieldsSize: 200 * 1024 * 1024
    }
}))
app.ws.use(async (ctx, next: any) => await next(ctx))

const broadcast = (data: string) => {
    ctxs.forEach((v) => {
        v.websocket.send(data)
    })
}

// const removeFiles = (files: string[]) => {
//     files.forEach(v => {
//         fs.unlink(targetPath + v, (err) => {
//             if (err) throw err
//         })
//     })
//     files = []
// }

const send = (ctx: Koa.Context, data: any) => {
    if (ctx.websocket.readyState === 1)
        ctx.websocket.send(data)
    else
        console.log("websocket is close")
}

// koa.use(route.post('/uploadFile', (ctx: any, params) => {
//     const file = ctx.request.files.file;
//     const reader = fs.createReadStream(file.path);
//     const upStream = fs.createWriteStream(`data/${file.name}`); // 创建可写流
//     reader.pipe(upStream);  // 可读流通过管道写入可写流
//     console.log(ctx, params, file);
//     return ctx.body = "上传成功";
// }))



app.ws.use(route.all('/', (ctx) => {

    // let flag = true
    // let targetfiles: string[] = []
    // let timer: NodeJS.Timeout

    ctxs.push(ctx)
    console.log(`当前角色id：${ctx.query.id}`)
    console.log(`当前连接人数：${ctxs.length}`)
    // send(ctx, `当前角色id：${ctx.query.id}`)
    // broadcast(`当前连接人数：${ctxs.length}`)

    fs.watch(targetPath, (event, filename) => {
        if (event === "change" && filename.indexOf(".wav") !== -1) {
            console.log(filename)
            fs.readFile(targetPath + filename, (err, data) => {
                if (err) return console.error(err)
                send(ctx, data)
            });
        }
    })


    // timer = setInterval(() => {
    //     fileNames = fs.readdirSync(targetPath)
    //     if (flag && fileNames.length) {
    //         flag = false
    //         // targetfiles[0] = fileNames[fileNames.length - 2]
    //         // targetfiles[1] = fileNames[fileNames.length - 1]
    //         recursive(({ recursive, files = fileNames, i = 0 }: any) => {
    //             const file = files[i]
    //             let index = 0
    //             console.log(`开始输出-文件==> ${file}`)
    //             storages[file] = []
    //             readStream(targetPath + file, (data: any) => {
    //                 if (!storages[file][index] && data.length == 65536) {
    //                     console.log("输出");
    //                 }
    //                 storages[file][index] = data
    //                 send(ctx, data)
    //                 index++
    //             }, () => {
    //                 console.log(`输出结束-文件==> ${file}`)
    //                 i++
    //                 if (i < files.length)
    //                     recursive({ recursive, files, i })
    //                 else
    //                     flag = true
    //             })
    //         })
    //         clearInterval(timer)
    //     }
    // }, 500)

    ctx.websocket.on("message", (message) => {
        console.log("message", message)
        // send(ctx, `收到客户端：${message}`)
    })

    ctx.websocket.on("close", (code, reason) => {
        console.log("close", code, reason)
        let index = ctxs.indexOf(ctx)
        // removeFiles(fileNames)
        // clearInterval(timer)
        ctxs.splice(index, 1)
        broadcast(`当前连接人数：${ctxs.length}`)
    })

}))

app.listen(80)

console.log("服务启动，开启端口80")

