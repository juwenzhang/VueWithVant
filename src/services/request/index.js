import axios from "axios"
import { BASE_URL, TIMEOUT } from "./config.js"

// 开始封装我们的 axios 请求
class JWZRequest{
    // 构造函数的实现
    constructor(baseUrl, timeout=10000) {
        this.instance = axios.create({
            baseUrl,
            timeout
        })
    }

    request(config) {
        return new Promise((resolve, reject) => {
            this.instance.request(config).then(res => {
                resolve(res?.data)
            }).catch(err => {
                reject(err)
            })
        })
    }

    get(config) {
        return this.request({...config, method: "GET"})
    }

    post(config) {
        return this.request({ ...config, matched: "POST" })
    }
}


export default new JWZRequest(BASE_URL, TIMEOUT)