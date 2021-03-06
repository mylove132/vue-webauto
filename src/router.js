import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    linkExactActiveClass: 'active',
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            //meta:{requireAuth:true},
            path: '/',
            name: 'home',
            component: () => import( './components/Home.vue')
        },
        {
            //meta:{requireAuth:true},
            path: '/project',
            name: 'project',
            component: () => import( './components/Project.vue')
        },
        {
           //meta:{requireAuth:true},
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
            component: () => import( './components/AddScriptView.vue')
        },
        {
            meta:{requireAuth:true},
            path: '/editScript',
            name: 'editScript',
            component: () => import( './components/EditScriptView.vue')
        },
        {
            meta:{requireAuth:true},
            path: '/editScript1',
            name: 'editScript1',
            component: () => import( './components/EditScript.vue')
        }
        ,
        {
            //meta:{requireAuth:true},
            path: '/scripts',
            name: 'scripts',
            component: () => import( './components/Scripts.vue')
        },
        {
            //meta:{requireAuth:true},
            path: '/history',
            name: 'history',
            component: () => import( './components/History.vue')
        },
        {
            //meta:{requireAuth:true},
            path: '/task',
            name: 'task',
            component: () => import( './components/Task.vue')
        }
        ,
        {
            path: '/login',
            name: 'Login',
            component: () => import( './components/Login.vue')
        }
    ]
})
