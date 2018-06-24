<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide, index) in data" :key="index"> <img :src="slide"></swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  export default {
    name: 'carrousel',
     props:['data'],
    data() {

      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          },
          observeParents:true

        },
        
      }
    },
    
  }
</script>
<style type="text/css" scoped>
  img{
    width: 100%;
    
  }
</style>