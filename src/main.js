import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/styles/index.scss' // global css
import VueRouter from 'vue-router'
import router from './router/index'
import http from 'axios'

//设置全局axios请求
Vue.prototype.$http = http
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
