import Vue from 'vue'
import Router from 'vue-router'
import Home from './src/views/Home.vue'
import MapPage from './src/views/Map.vue'
import About from './src/views/About.vue'
import Contact from './src/views/Contact'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        }, 
        {
            path: '/map',
            name: 'map',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: MapPage
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: About
        },
        {
            path: '/contact',
            name: 'contact',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: Contact
        }
    ]
})