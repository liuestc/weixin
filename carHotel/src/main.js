// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import Home from './components/HelloFromVux'
import axios from 'axios'
import List from './components/list.vue'
import Hotel from './components/hotel.vue'
import HotelDetailed from './components/hotelDetailed.vue'
import OrderRoom from './components/order.vue'
import Confirm from './components/confirm.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  component: Home
},{
	path:'/myOrder',
	component:List
},{
	name:'hotel',
	path:'/hotel/:id',
	component:Hotel
},{
	path:'/hotelDetail',
	component:HotelDetailed
},{
	path:"/orderRoom",
	component:OrderRoom
},{
	path:'/confirm',
	component:Confirm
}
]

const router = new VueRouter({
  routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
