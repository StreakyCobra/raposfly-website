import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Home from './components/Home'
import i18n from './language'
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'
require('bootstrap')

Vue.use(VueRouter)
const routes = [
    {
        path: '/:lang',
        name: 'home',
        component: Home
    },
    {
        path: '*',
        redirect: '/en'
    }
]

const router = new VueRouter({
    mode: 'history',
    routes: routes,
    scrollBehavior (to, from, savedPosition) {
        if (to.hash !== from.hash) {
            return {selector: to.hash}
        }
    }
})

router.afterEach((to, from) => {
    i18n.locale = to.params.lang
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    template: '<App/>',
    components: { App },
    router,
    i18n
})
