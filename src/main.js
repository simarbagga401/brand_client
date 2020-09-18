import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './routes.js'
// IMPORTING ROUTES
const router = new VueRouter({
	routes,
	mode:"history",
	base: process.env.BASE_URL
})
Vue.use(VueRouter)
Vue.config.productionTip = false


new Vue({
  router,	
  render: h => h(App),
}).$mount('#app')
