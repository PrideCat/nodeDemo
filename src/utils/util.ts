import fs from "fs"
const stat = fs.stat

/**
 * 打印报错信息
 * @param err 
 */
const throwErr = (err: any) => {
    if (err) {
        console.log(err)
        return 1
    }
}

/**
 * 读取文件流
 * @param filepath 文件路径
 * @param callback 回调
 * @param complete 完成的回调
 */
const readStream = (filepath: string, callback: Function, complete: Function) => {

    const stream = fs.createReadStream(filepath)
    stream.on('open', () => {
        console.log('开始读取文件')
    })
    stream.on('data', (data) => {
        console.log('读取到数据：', data)
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

// class recursive {
//     constructor(recursive: Function, options: any = {}) {
//         options.recursive = recursive
//         recursive(options)
//     }
// }

/**
 * 这是个递归方法
 * @param recursive 要递归的方法
 * @param options 自定义参数
 */
const recursive = (recursive: Function, options: any = {}) => {
    options.recursive = recursive
    recursive(options)
}

/**
 * 在复制目录前需要判断该目录是否存在，不存在需要先创建目录
 * @param src 复制路径
 * @param dst 目标路径
 * @param callback 回调函数
 */
const exists = (src: string, dst: string, callback: Function) => {
    fs.exists(dst, (exists) => {
        if (exists)
            callback(src, dst)
        else
            fs.mkdir(dst, () => callback(src, dst))
    })
}

/**
 * 复制目录中的所有文件/目录
 * @param src 复制路径
 * @param dst 目标路径
 */
const fsCopy = (src: string, dst: string) => {
    stat(src, (err, st) => {
        if (throwErr(err)) return
        // 判断是否为文件
        if (st.isFile()) {
            // 创建读取流
            let readable = fs.createReadStream(src)
            // 创建写入流
            let writable = fs.createWriteStream(dst)
            // 通过管道来传输流
            readable.pipe(writable)
        }
        // 如果是目录则递归调用自身
        else if (st.isDirectory()) {
            exists(src, dst, fsCopy)
        }
    })
}

/**
 * 删除文件及目录 
 * @param path 例子./* ./ ./test.txt
 * @param callback 回调函数
 */
const fsRemove = (path: string, callback: Function | void) => {
    const paths = path.split("/")
    const filename = paths.pop()
    path = paths.join("/") + "/"
    fs.readdir(path, (err, files) => {
        if (throwErr(err)) return
        if (filename && filename !== "*") {
            console.log("删除文件==》", filename)
            fs.unlink(path + filename, (err) => {
                if (throwErr(err)) return
                if (callback) callback()
            })
        } else {
            console.log("删除所有文件==》", files)
            recursive(({ recursive, i = 0 }: any) => {
                if (files[i]) {
                    fs.unlink(path + files[i], (err) => {
                        if (throwErr(err)) return
                        i++
                        if (i <= files.length) recursive({ recursive, i })
                    })
                } else {
                    if (!filename) fs.rmdirSync(path)
                    if (callback) callback()
                }
            })
        }
    })
}

/**
 * 同步加载方法
 * @param callback 
 */
const asyncAwaitFn = async (callback: Function) => {
    return await new Promise((resolve) => {
        callback(resolve)
    })
}

export { readStream, recursive, fsCopy, fsRemove, asyncAwaitFn, throwErr }