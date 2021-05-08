import Vue from 'vue'
import axios from 'axios' // 引入axios
// 导入Nprogress所需要的js包和css包
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'

// 创建一个 axios 实例
const service = axios.create({
    timeout: 2000
})

Vue.prototype.$http = service // 将axios挂载到 Vue 原型上的$http属性上

// 请求拦截器
service.interceptors.request.use(
    config => {
        Nprogress.start()
        return config
    }
)

// 返回数据拦截器
service.interceptors.response.use(
    config => {
        Nprogress.done()
        return config
    }
)


export default service