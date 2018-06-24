<template>
  <div>

    <MHeader :back="false">首页</MHeader>

    
   
     <div class="content">
      <Loading v-if="loading"> </Loading>
      <template v-else>
        <Swiper :data="sliders"></Swiper>
        <h3>热门图书</h3>
        <ul>
          <li v-for="hot in books">
            <img :src="hot.bookCover" :alt="hot.bookName">
            <p><b>{{hot.bookName}}</b></p>
          </li>
        </ul>
      
    </template>
  </div>
   
    

  </div>
</template>
<script type="text/javascript">
 import MHeader from "../base/MHeader.vue";
import Swiper from "../base/Swiper.vue";
import Loading from "../base/Loading.vue";
// import {getSliders,getHotBook} from "../api";
import {getAll} from "../api";


  export default {
    name:"home",
    data(){
      return {sliders:[],books:[],
        loading:true
        
      }
    },
    methods:{
    
        async getData(){
           let [sliders,hotbook] = await getAll()
             
           
          
           this.sliders = sliders.data;
           this.books = hotbook.data;
            console.log(this.sliders);
            //执行到这里代表数据全部获取到
            this.loading = false;
         
        }
      // getSlider(){
      //   //获取轮播图
      //     getSliders().then((res)=>{
      //     let {data} = res;
      //    return  this.sliders = data;
      //   })
      // },
      // getHot(){
      //   getHotBook().then((res)=>{
      //     let{data} = res;
      //     return this.books = data
      //   })
      // }
    },
    created(){
     this.getData()
      // this.getSlider(),
      // this.getHot()
    },
    
   
    components:{
      MHeader,Swiper,Loading

    }


  }
</script>
<style  scoped lang="scss">
  h3{
    color:#999;
   width: 90%;
     margin:0 auto;
 padding:5px 0;
  }
  ul{
     

    display:flex;
    flex-wrap:wrap;

    li{
      width:50%;
       padding:5px 0 ;
    text-align:center;
      margin-bottom:10px;


      // img{
      //   width:100%;
      // }
    }
  }
</style>