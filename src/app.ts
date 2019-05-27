
import fs from "fs";
import Koa from "koa";
// import route from "koa-route";
import WebSocket from "koa-websocket";

const app = WebSocket(new Koa());
const ctxs: any[] = [];
let fileArr: any[] = [];
let targetPath = "./data";
app.listen(8080);

const readStream = (url: string, callback: Function) => {

    const stream = fs.createReadStream(url);
    stream.on('open', (fd) => {
        console.log('开始读取文件', fd);
    });
    stream.on('data', (data) => {
        console.log('读取到数据：');
        console.log(data);
        if (callback) callback(data);
    });
    stream.on('end', () => {
        console.log('文件已全部读取完毕');
        stream.close();
    });
    stream.on('close', () => {
        console.log('文件被关闭');
    });
    stream.on('error', (err) => {
        console.log('读取文件失败', err);
    });

};

fs.readdir(targetPath, (err, files) => {
    if (err) throw err;
    console.log(files);
    fileArr = files;
});

app.ws.use((ctx) => {

    ctxs.push(ctx);
    console.log("当前角色id：", ctx.query.id);
    console.log("当前人数：", ctxs.length);

    ctxs.forEach((v: any) => {
        fileArr.forEach((url: any) => {
            readStream(`${targetPath}/${url}`, (data: any) => {
                v.websocket.send(data)
            })
        })
    })

    ctx.websocket.on("message", (message) => {
        console.log("message", message);
        ctx.websocket.send(`收到客户端：${message}`);
    });

    ctx.websocket.on("close", (code, reason) => {
        console.log("close", code, reason);
        let index = ctxs.indexOf(ctx);
        ctxs.splice(index, 1);
    });

});

console.log("服务启动，开启端口8080");

