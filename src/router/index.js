import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import Home from "../components/home.vue";
// import List from "../components/list.vue";
// import Add from "../components/add.vue";
// import Collection from "../components/collection.vue";
// import Datail from "../components/Datail.vue";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: ()=>import('../components/Home.vue'),

      meta:{keepAlive:true,title:"首页"}

    },
    {
      path: '/',
      name: 'home',
      redirect: "/home"
      
    },
    {
      path: '/list',
      name: 'list',
      component: ()=>import('../components/List.vue'),
      meta:{title:"列表"}
    },
    {
      path: '/datail/:id',
      name: 'datail',
      component: ()=>import('../components/Datail.vue'),
      meta:{title:"详情"}
    
    },
    {
      path: '/add',
      name: 'add',
      component: ()=>import('../components/Add.vue'),
      meta:{title:"添加"}
    },
    {
      path: '/collection',
      name: 'collection',
      component: ()=>import('../components/Collection.vue'),
      meta:{title:"收藏"}
    },
  ]
})
