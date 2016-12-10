import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Home from './components/Home'
import About from './components/About'
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
        path: '/:lang/about',
        name: 'about',
        component: About
    },
    {
        path: '*',
        redirect: '/en'
    }
]

const router = new VueRouter({
    mode: 'history',
    routes: routes
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
