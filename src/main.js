import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import VueRouter from "vue-router"
import FastClick from 'fastclick'
import HomeIndex from "./components/homeindex/homeindex"
import HomeNav from "./components/nav/nav"
import HomeSort from "./components/sort/sort"
// import BottomNav from "./components/bottomnav/bottomnav"


import DetailBottomnav from "./components/detail/detailbottomnav/detailbottomnav"
import DetailHome from "./components/detail/detailhome/detailhome"
import FastBuy from "./components/detail/fastbuy/fastbuy"
import DetailSell from "./components/detail/sell/sell"
import DetailNew from "./components/detail/new/new"
import DetailMy from "./components/detail/my/my"


import ShopCar from "./components/shopcar/shopcar"
import HomeMine from "./components/homemine/homemine"
import EnterIndex from "./components/enterindex/enterindex"


import HomeGoodsDetail from "./components/homegoodsdetail/homegoodsdetail"
import HomeCity from "./components/homecity/homecity"
import HomeSearch from "./components/homesearch/homesearch"
import HomeLogin from "./components/homelogin/homelogin"


//
import store from './store'	
//

Vue.use(VueRouter)


FastClick.attach(document.body)
import "./assets/style/reset.css"
import './assets/style/border.css'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)


import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
import { Popup } from 'mint-ui';

Vue.config.productionTip = false
Vue.prototype.$axios = axios

let router = new VueRouter ({ 
	routes: [
		
	   {
	      path: '/',
	      component: HomeIndex,
	      redirect: '/index',

	      children: [
	      		   {
				      path: 'index',
				      component: EnterIndex

				   },
				   { 
				      path: 'sort',
				      component: HomeSort
				   },
				   {
				      path: 'car',
				      component: ShopCar,
				      meta: { 
				      		requireAuth: true
				      }

				   },
				   {
				      path: 'mine',
				      component: HomeMine
				   }
			]
	   },
	   {
	   		path: '/goods/:id',
	   		component: HomeGoodsDetail
	   },
	   {
	   		path: '/search',
	   		component: HomeSearch
	   },
	   {
	   		path: '/login',
	   		component: HomeLogin
	   },
	   {
			path: '/detail',
			component: DetailHome,
			redirect: '/detail/fastbuy',
			children: [
				{
					path: 'fastbuy',
					component: FastBuy
				},
				{
					path: 'sell',
					component: DetailSell
				},
				{
					path: 'new',
					component: DetailNew
				},
				{
					path: 'my',
					component: DetailMy
				}
			]
		}
	]
})




new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
