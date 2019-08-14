import Koa from "koa"
import route from "koa-route"
import { asyncAwaitFn, throwErr } from "./util"
import { Model, Document, connect, model, Schema } from "mongoose"
import koabody from "koa-body"

interface api {
    use(koa: Koa<any, {}>): void
    ctrl: any
    usersDB?: Model<Document, {}>
    videoDB?: Model<Document, {}>
}

const api: api = {
    use(koa: Koa<any, {}>) {

        koa.use(async (ctx, next: any) => {
            await ctx.set('Access-Control-Allow-Origin', '*')
            await next(ctx)
        })

        koa.use(koabody({ multipart: true, formidable: { maxFieldsSize: 200 * 1024 * 1024 } }))

        connect('mongodb://127.0.0.1:27017/test', { useNewUrlParser: true }, (err) => {
            if (throwErr(err)) return
            console.log("数据库连接成功！")
        })

        this.usersDB = model("users", new Schema({
            name: String,
            userId: String,
            teamName: String
        }))

        this.videoDB = model("videos", new Schema({
            sendId: String,
            sendName: String,
            acceptId: String,
            acceptName: String,
            createTime: Date,
            startTime: Date,
            endTime: Date,
            outline: String,
            summary: String,
            WhiteboardPic: String
        }))

        for (let k in this.ctrl) {
            koa.use(route.post(`/${k}`, this.ctrl[k].api))
        }

    },
    ctrl: {
        addUser: {
            async api(ctx: Koa.Context) {
                const name = ctx.request.body.name
                const userId = ctx.request.body.userId
                const teamName = ctx.request.body.teamName
                return ctx.body = await api.ctrl.addUser.dbapi(name, userId, teamName)
            },
            async dbapi(name: string, userId: string, teamName: string) {
                const hasUser = await api.ctrl.getUsers.dbapi({ userId })
                if ((<any[]>hasUser.data).length) {
                    return { isOk: 0, msg: '用户已存在' }
                } else {
                    if (api.usersDB) api.usersDB.create([{ name, userId, teamName }], (err: any) => {
                        if (throwErr(err)) return
                        console.log(`添加了用户${name}`)
                    })
                    return { isOk: 1, msg: `添加了用户${name}` }
                }
            }
        },
        getUsers: {
            async api(ctx: Koa.Context) {
                return ctx.body = await api.ctrl.getUsers.dbapi()
            },
            async dbapi(query: any = {}) {
                const users = await asyncAwaitFn((resolve: Function) => {
                    console.log("查询用户", JSON.stringify(query))
                    if (api.usersDB) api.usersDB.find(query, (err, docs) => {
                        if (throwErr(err)) return
                        console.log("查询结果", docs)
                        resolve(docs)
                    })
                })
                return { isOk: 1, msg: "查询成功", data: users }
            }
        },
        addVideo: {
            async api(ctx: Koa.Context) {
                const sendId = ctx.request.body.sendId
                const sendName = ctx.request.body.sendName
                const acceptId = ctx.request.body.acceptId
                const acceptName = ctx.request.body.acceptName
                const createTime = new Date()
                const startTime = new Date()
                const endTime = new Date()
                const outline = ctx.request.body.outline
                const summary = ctx.request.body.summary
                const WhiteboardPic = ctx.request.body.WhiteboardPic
                return ctx.body = await api.ctrl.addVideo.dbapi(
                    sendId,
                    sendName,
                    acceptId,
                    acceptName,
                    createTime,
                    startTime,
                    endTime,
                    outline,
                    summary,
                    WhiteboardPic
                )
            },
            async dbapi(
                sendId: String,
                sendName: String,
                acceptId: String,
                acceptName: String,
                createTime: Date,
                startTime: Date,
                endTime: Date,
                outline: String,
                summary: String,
                WhiteboardPic: String
            ) {
                let videoRes: any
                await asyncAwaitFn((resolve: Function) => {
                    if (api.videoDB) api.videoDB.create([{
                        sendId,
                        sendName,
                        acceptId,
                        acceptName,
                        createTime,
                        startTime,
                        endTime,
                        outline,
                        summary,
                        WhiteboardPic
                    }], async (err: any) => {
                        if (throwErr(err)) return
                        console.log("添加了一个视频通话活动")
                        resolve(videoRes = await api.ctrl.getVideo.dbapi({ sendId, acceptId, createTime }))
                        if (api.ctrl.addVideo.callback) api.ctrl.addVideo.callback(videoRes)
                    })
                })
                return { isOk: 1, msg: "添加了一个视频通话活动", data: videoRes.data[0] }
            }
        },
        getVideo: {
            async api(ctx: Koa.Context) {
                return ctx.body = await api.ctrl.getVideo.dbapi()
            },
            async dbapi(query: any = {}) {
                const videos = await asyncAwaitFn((resolve: Function) => {
                    console.log("查询用户", JSON.stringify(query))
                    if (api.videoDB) api.videoDB.find(query, (err, docs) => {
                        if (throwErr(err)) return
                        console.log("查询结果", docs)
                        resolve(docs)
                    })
                })
                return { isOk: 1, msg: "查询成功", data: videos }
            }
        },
    }
}

export default api
