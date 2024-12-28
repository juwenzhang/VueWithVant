import axios from "axios"
import { config } from "./config.js"

// 开始封装我们的 axios 请求
class JWZRequest{
    // 构造函数的实现
    constructor(baseUrl, timeout=10000) {
        this.instance = axios.create({
            baseURL: baseUrl,
            timeout: timeout
        })
    }

    request(config) {
        return new Promise((resolve, reject) => {
            this.instance.request(config).then(res => {
                resolve(res.data)
            }).catch(err => {
                console.log("服务端接口有问题~~~")
                reject(err)
            })
        })
    }

    get(config) {
        return this.request({...config, method: "GET"})
    }

    post(config) {
        return this.request({ ...config, method: "POST" })
    }
}

const JWZRequestInstance = new JWZRequest(config.baseURL, config.timeout)
export default JWZRequestInstance