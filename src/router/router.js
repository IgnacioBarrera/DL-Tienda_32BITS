import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: () => import('../views/Inicio.vue')
  },
  {
    path: '/busquedas',
    name: 'Busquedas',
    component: () => import('../views/Busquedas.vue')
  },
  {
    path: '/ventas',
    name: 'Ventas',
    component: () => import('../views/Ventas.vue')
  },
  {
    path: '/total',
    name: 'Total',
    component: () => import('../views/Total.vue')
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
