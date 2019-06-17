import fs from "fs";

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

export { readStream, recursive }