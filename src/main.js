// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import swiper from "vue-awesome-swiper"
import 'swiper/dist/css/swiper.css'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload);
//router 全局钩子   在每次路由执行前执行
router.beforeEach((to,from,next)=>{
 
  document.title = to.meta.title;
  next()

})

// or with options
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'http://p2.so.qhimgs1.com/bdr/_240_/t0110dc91bce6e4a7ae.png',
  loading: 'http://p0.so.qhimgs1.com/bdr/_240_/t015b04a01734729ba0.gif',
  attempt: 1
})

Vue.use(swiper)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
