import logger from "Vuex/dist/logger";//日志插件
import Vuex from "Vuex";//状态管理
import Vue from "vue";
Vue.use(Vuex);
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
export default  new Vuex.Store({
  state,
  mutations,
  plugins:[logger()],
  strict:true
})
