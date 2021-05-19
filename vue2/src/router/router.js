import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter)

// 创建一个路由规则
const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: () => import('../views/Home'),
        redirect: '/welcome',
        children: [
            {
                path: '/welcome',
                component: () => import('../components/welcome')
            },
            {
                path: '/axios/jokes',
                component: () => import('../components/axios/jokes')
            },
            {
                path: '/axios/weather',
                component: () => import('../components/axios/weather')
            },
            {
                path: '/axios/news',
                component: () => import('../components/axios/news')
            },
            {
                path: '/axios/novel',
                component: () => import('../components/axios/novel')
            },
            {
                path: '/axios/music',
                component: () => import('../components/axios/music')
            },
            {
                path: '/echarts/echarts',
                component: () => import('../components/echarts/echarts')
            }
        ]
    }
]

const Router = new VueRouter({
    mode: 'history',
    routes // 挂载路由规则
})

/* Router.beforeEach((to, from, next) => {
    //to and from are Route Object,next() must be called to resolve the hook}
    if (to === '/home') next()

}) */


// 向外暴露路由实例
export default Router