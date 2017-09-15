import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Slider from '@/components/Slider'
import BetterScroll from "@/components/testBetterScroll"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Slider',
      component: Slider
    },
    {
    	path:"/BetterScroll",
    	name:"BetterScroll",
    	component:BetterScroll
    }
  ]
})
