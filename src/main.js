// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'
import Mint from 'mint-ui';
Vue.use(Mint);
import 'mint-ui/lib/style.css'
import router from './router/SalaryRouter.js'
// 引入axios
import axios from 'axios';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

// 挂载到vue原型链上
Vue.prototype.axios = axios;

// axios.defaults.withCredentials = true
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
