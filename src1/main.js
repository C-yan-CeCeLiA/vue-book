import Vue from "Vue";
import App from "./app.vue";
import logger from "Vuex/dist/logger";//日志插件
import Vuex from "Vuex";//状态管理

Vue.use(Vuex);
const getters = {
  val:(state)=>state.count%2?'奇数':'偶数'
  
};

const mutations = {
  add(state){
    state.count +=1;
  },
  minus(state){
    state.count -=1;
  }

};
const state = {
  count:0
}
const store = new Vuex.Store({
  state,
  mutations,
  getters,
  plugins:[logger()],
  strict:true
})


new Vue({
  el:"#app",
 render: h => h(App),

  store
})

