import Vue from 'vue'
import App from './App.vue'
import router from "./router/router"
import store from './store/store'
import ElementUI from 'element-ui' // 引入element-ui组件库 all
import 'element-ui/lib/theme-chalk/index.css' // 单独引入组件样式库
import '../src/assets/css/global.css' // 引入全局样式
import axios from 'axios'

Vue.prototype.$http = axios

Vue.use(ElementUI) // 引入全部的组件库

Vue.config.productionTip = false

new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app')