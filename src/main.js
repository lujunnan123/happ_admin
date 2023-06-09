import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store/index'
import *as echarts from 'echarts'
import TypeNav from '@/components/TypeNav'
Vue.component('TypeNav',TypeNav);
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(ElementUI);

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
