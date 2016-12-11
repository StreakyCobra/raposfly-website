import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Home from './components/Home'
import language from './language'
require('bootstrap')
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'

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
        if (to.hash) {
            return {selector: to.hash}
        }
    }
})

router.afterEach((to, from) => {
    language.set(to.params.lang)
})

Object.defineProperties(Vue.prototype, {
    $language: {
        get: function () {
            return language
        }
    }
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    template: '<App/>',
    components: { App },
    router: router
})
