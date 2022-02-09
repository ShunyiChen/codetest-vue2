import axios from 'axios'
import config from '../config'

console.log('process.env.NODE_ENV=',process.env.NODE_ENV)

const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro

class HttpRequet {
    constructor(baseUrl) {
        this.baseUrl = baseUrl
        console.log('baseUrl=',baseUrl)
    }

    getInsideConfig() {
        const config = {
            baseUrl: this.baseUrl,
            header: {}
        }
        return config
    }

    interceptors(instance) {
        //添加请求拦截器
        instance.interceptors.request.use(function(request) {
            return request
        }, function(err) {
            console.log("请求拦截器输出了一个错误：", err)
            return Promise.reject(err)
        })

        //添加响应拦截器
        instance.interceptors.response.use(function(response) {
            return response
        }, function(err) {
            console.log("响应拦截器输出了一个错误：", err)
            return Promise.reject(err)
        })
    }

    request(options) {
        const instance = axios.create()
        options = {
            ...this.getInsideConfig(), ...options
        }
        this.interceptors(instance)
        return instance(options)

    }
}
export default new HttpRequet(baseUrl)
