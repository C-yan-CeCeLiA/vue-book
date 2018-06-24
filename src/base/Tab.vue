<template>
  <div class="footer">
     <router-link to="./home"><i class="iconfont icon-home"></i><span>主页</span></router-link>
    <router-link to="./list"><i class="iconfont icon-liebiao"></i><span>列表页</span></router-link>
    <router-link to="./collection"><i class="iconfont icon-shoucangxing2"></i><span>购物车</span></router-link>
    <router-link to="./add"><i class="iconfont icon-tianjia"></i><span>添加</span></router-link>

  </div>
</template>
<style lang="scss">

.footer{
  position:fixed;
  left:0;
  bottom:0;
  border-top:1px solid;
  height:50px;
  width:100%;
  display:flex;
  a{
    display:flex;
   flex-direction: column ;
    justify-content:center;
     align-items:center;
     flex:1;
     color:#f0e00e;

  }
  a.router-link-active{
        color:red;
  }

}
  
</style>