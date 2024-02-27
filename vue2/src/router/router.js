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
                component: () => import('../components/welcome.vue')
            },
            {
                path: '/axios/jokes',
                component: () => import('../components/Axios/Jokes.vue')
            },
            {
                path: '/axios/weather',
                component: () => import('../components/Axios/Weather.vue')
            },
            {
                path: '/axios/news',
                component: () => import('../components/Axios/News.vue')
            },
            {
                path: '/axios/novel',
                component: () => import('../components/Axios/Novel.vue')
            },
            {
                path: '/axios/music',
                component: () => import('../components/Axios/Music.vue')
            },
            {
                path: '/echarts/echarts',
                component: () => import('../components/echarts/echarts.vue')
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