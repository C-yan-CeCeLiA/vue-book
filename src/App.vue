<template>
  <div id="app">
    
    <keep-alive>
      <!-- 访问到home时才会有meta.keepAlive -->

      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>

    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <Tab></Tab>
  </div>
</template>

<script>
import Tab from './base/Tab.vue';
export default {


  name: 'App',
  components:{
    Tab
  }
}
</script>

<style >
*{
  margin:0;padding:0;
}
ul,li{
  list-style:none;
}
a{
  text-decoration:none;
}
.content{
  position:fixed;
  top:40px;
  bottom:50px;
  width: 100%;
  overflow: auto;
}
</style>
