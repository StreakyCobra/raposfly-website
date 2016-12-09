import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Home from './components/Home'
import About from './components/About'

import language from './language'
import 'bootstrap/dist/css/bootstrap.css'

Vue.use(VueRouter)
const routes = [
    { path: '/', component: Home },
    { path: '/about/', component: About }
]

const router = new VueRouter({
    mode: 'history',
    routes: routes
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
