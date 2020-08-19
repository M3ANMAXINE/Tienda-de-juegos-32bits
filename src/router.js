import Vue from 'vue'
import Router from 'vue-router'
const Inicio = () => import('./components/Inicio')
import Search from './components/Search.vue'

Vue.use(Router)

export default new Router({
    mode: 'history', 
    routes: [
        {
            path: '/',
            name: 'home',
            component: Inicio
        },
        {
            path: '/busqueda',
            name: 'search',
            component: Search
        }     
    ]
})