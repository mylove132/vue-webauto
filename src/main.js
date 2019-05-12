import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex/vuex'
import {fetch,post,put,patch,del} from './http'
import qs from 'qs'
import api from './urls'
import vuei18n from 'vue-i18n'
import db from './util'


//定义全局变量
Vue.prototype.$fetch=fetch;
Vue.prototype.$post=post;
Vue.prototype.$put=put;
Vue.prototype.$del=del;
Vue.prototype.$patch=patch;
Vue.prototype.qs=qs;
Vue.prototype.$api=api
Vue.prototype.$db=db

Vue.config.productionTip = false


router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requireAuth)) { // 判断该路由是否需要登录权限
        if (store.getters.isLoggedIn == true) { // 判断当前的token是否存在
            next();
        }
        else {
            next({
                path: '/login',
                query: {redirect: to.fullPath} // 将跳转的路由path作为参数，登录成功后跳转到该路由
            })
        }
    }
    else {
        next();
    }
});
new Vue({
    el: "#app",
    router,
    vuei18n,
    store,
    render: h => h(App)
})
