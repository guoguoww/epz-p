import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const routes = [
  {//首页
    path: '/',
    name: 'home',
    component: Home
  },
  {//配资计划
    path: '/plan',
    name: 'plan',
    component: () => import('./views/fundsPlan/plan')
  },
  {//在线交易
    path: '/trading',
    name: 'trading',
    component: () => import('./views/onlineTrading/trading')
  },
  {//关于我们
    path: '/aboutUs',
    name: 'aboutUs',
    component: () => import('./views/aboutUs/About.vue')
  },
  {//我的账户
    path: '/account',
    name: 'account',
    component: () => import('./views/myAccount/account')
  },
  {//登录
    path: '/login',
    name: 'login',
    component: () => import('./views/loginOut/login'),
    meta: {
      active: '/login'
    }
  },
  {//注册
    path: '/reg',
    name: 'reg',
    component: () => import('./views/loginOut/reg'),
    meta: {
      active: '/reg'
    }
  }
]

export default new Router({
  routes,
})
