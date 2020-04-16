import Vue from 'vue'
import App from './App.vue'

//使用mock
import "@/mock"
//使用http
import http from './http'
Vue.prototype.$http=http
//注册router
import router from './router'
//注册vuex
import store from './store'
//引入icon样式
import "./common/stylus/style.styl"
import "./common/stylus/minxin.styl"
import './filters'

Vue.prototype.$bus=new Vue()
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
