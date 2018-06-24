<template>
  <div class="header">
    
    <i class="iconfont icon-fanhui" v-if="back" @click = 'GoBack'></i>
    <slot></slot>
  </div>
</template>
<script type="text/javascript">
  export default {
    name:"MHeader",
    
    props:{
      back:{
        type:Boolean,
        default:false
      }
    },
    methods:{
      GoBack(){
        this.$router.go(-1)
      }
    }
  }

</script>
<style scoped lang="scss">
  .header{
    position:fixed;
    left:0;
    top:0;
    width:100%;
    text-align:center;
    line-height:40px;
    height:40px;
    background:#fffaed;
    i{
      position:absolute;
      left:0;

    }


  }
</style>