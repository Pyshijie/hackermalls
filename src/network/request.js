import axios from 'axios'


export function request(config) {
    // 1.创建实例对象
    const instance = axios.create({
      baseURL:"http://152.136.185.210:7878/api/hy66",
      timeout:5000
    })

    // 2.进行网络拦截

    //2.1 axios拦截请求

    instance.interceptors.request.use(config => {
      return config
    }, err => {
    })

    //2.2拦截响应

    instance.interceptors.response.use(resp => {
      return resp.data
    }, err => {
    })

    // 3.发送网络请求
    return instance(config)

}

