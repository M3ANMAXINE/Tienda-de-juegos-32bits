import Vue from 'vue'
import Router from 'vue-router'
const Inicio = () => import('./components/Inicio')
import Search from './components/Search'
import Sales from './components/Sales'
import Total from './components/Total'
import NotFound from './components/NotFound'





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
        },
        {
            path: '/ventas',
            name: 'sales',
            component: Sales
        },
        {
            path: '/total',
            name: 'total',
            component: Total
        },
        {
            path: '/*',
            name: 'NotFound',
            component: NotFound
        }
    ]
})