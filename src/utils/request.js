// 首先引入axios插件
import axios from 'axios'

// 创建axios实例
const service = axios.create({
    // axios中请求配置有baseURL选项，表示请求URL公共部分
    baseURL: process.env.VUE_APP_BASE_API,
    // 超时
    timeout: 3000000
})

// request拦截器
service.interceptors.request.use(config => {
    // 是否需要设置 token
    let token = localStorage.getItem('token') || ''
    if (!token) {
        token = 'Bearer ' + 'sGic4EbQZpa+BQBK3JhmSLKtmAbFOSU5BtEN5hPgrl5IG3CET3YtsEEeq2ZJfyBIf+IriT6YGcyMys2WIkApq4oFIOxc2Pg0SwwZnvLtpUzocZV7/BoHkuOb36wS3LpQ'
    }
    config.headers.Authorization = token
    return config
}, error => {
    console.log(error)
    Promise.reject(error)
})

// 响应拦截
service.interceptors.response.use(res => {

    return res.data.data
}, err => {
    return Promise.reject(err)
})

export default service