import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'

Vue.use(Router)

export default new Router({
    linkExactActiveClass: 'active',
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            meta:{requireAuth:true},
            path: '/',
            name: 'home',
            component: Home
        },
        {
            meta:{requireAuth:true},
            path: '/teacherSpace',
            name: 'teacherSpace',
            component: () => import( './components/TeacherSpace.vue')
        },
        {
            meta:{requireAuth:true},
            path: '/report',
            name: 'report',
            component: () => import( './components/Report.vue')
        },
        {
            meta:{requireAuth:true},
            path: '/account',
            name: 'account',
            component: () => import( './components/Account.vue')
        },
        {
            meta:{requireAuth:true},
            path: '/addScripts',
            name: 'addScripts',
            component: () => import( './components/AddScript.vue')
        },
        {
            meta:{requireAuth:true},
            path: '/scripts',
            name: 'scripts',
            component: () => import( './components/Scripts.vue')
        },
        {
            meta:{requireAuth:true},
            path: '/history',
            name: 'history',
            component: () => import( './components/History.vue')
        },
        {
            meta:{requireAuth:true},
            path: '/shopping',
            name: 'Shopping',
            component: () => import( './components/Shopping.vue')
        },
        {
            path: '/login',
            name: 'Login',
            component: () => import( './components/Login.vue')
        }
    ]
})
