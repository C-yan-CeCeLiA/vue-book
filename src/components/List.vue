<template>
  <div>
    <MHeader>列表页</MHeader>
    <div class="content" ref="scroll" @scroll="loadMore">
      <h3>图书</h3>

      <ul>
         <router-link v-for="(book,index) in books" :to="{name:'datail',params:{id:book.bookId}}" :key="index" tag="li">

          <img v-lazy="book.bookCover" :alt="book.bookName">
          <div>
            <h4>{{book.bookName}}</h4>
            <p>{{book.bookInfo}}</p>
            <b>{{book.bookPrice}}</b><br>
            <button @click.stop="remove(book.bookId)">删除</button>
            <button @click.stop>添加购物车</button>

          </div>
         

        </router-link>
      </ul>
    
  </div>
  </div>
</template>
<script type="text/javascript">
import MHeader from "../base/MHeader.vue";
import {pagination,removeBook} from "../api";
  export default {
    name:"list",
    data(){
      return {books:[],offset:0,hasMore:true,isLoading:false}
    },
    mounted(){
      let scroll = this.$refs.scroll;//获取要拖拽的元素
      let top = scroll.offsetTop;//获取页面偏移量
      let distance = 0;//距离
      
      scroll.addEventListener("touchstart",(e)=>{
         if (scroll.scrollTop != 0 ) {return}
            console.log(scroll.scrollTop )
           //获取开始的坐标
          let start = e.touches[0].pageY;
          //<!------------------------
                    //拖动事件
          let move = (e)=>{
          
             //获取下拉后的坐标
            let current = e.touches[0].pageY;
            //下拉后的位置
            if (current - start > 0) {
              
              distance = current - start ;
             //防止拖动的太下
             if (distance <= 50) {
               scroll.style.top = distance+top+"px"  ;
             }else{
              distance = 50;
              scroll.style.top = top + 50 +"px"
             }
            
            }else{//不在考虑的范围之内，移除move，end事件
              scroll.removeEventListener("touchmove",move);
              scroll.removeEventListener("touchend",end)

            }
          };
          //------------------------!>
         
        let end = (e)=>{
          clearTimeout(this.timer1);
          this.timer1 = setInterval(()=>{
            if (distance <= 0) {
              clearTimeout(this.timer1)
              distance = 0;
              scroll.style.top = 0;
            

              scroll.removeEventListener("touchmove",move);
              scroll.removeEventListener("touchend",end);
              // cmd
              if (this.hasMore) {
                  this.books = [];//获取数据前清空数据，获取最新数据
                }else{
                  console.log(this.books);
                  this.books = this.books.slice(-5)
                }
            

                this.getData();
            }
            distance -= 1;
            scroll.style.top = distance + top +"px";
          },10)
         };

        scroll.addEventListener("touchmove",move);
        scroll.addEventListener("touchend",end);
        //页面刷新完毕
         

      })

    },

    components:{
      MHeader
    },
    methods:{
      loadMore(){
        let {scrollTop,clientHeight,scrollHeight}= this.$refs.scroll;
        // console.log(this.$refs.scroll.scrollTop)
        //<----------------------------
              //页面防抖技术，防止多次滚动条多次加载，

        clearTimeout(this.timer),
        //将timer 挂载在vue实例上
      this.timer = setTimeout(()=>{
           //当页面偏移的高度加上可见区高度大致上等于滚动条的高度
            if (scrollTop + clientHeight + 20 >= scrollHeight) {
            this.getData();
          }
        },20)

      //<-------------------------------
        
      },
       
        async getData(){

         let {data} =  await pagination(this.offset);
         let {hasMore,books} = data;
         // console.log(data)
         if (this.hasMore && !this.isLoading )  {
          this.isLoading = true;//正在加载
          this.books = [...this.books, ...books],
          this.hasMore = hasMore;
          this.isLoading = false;//加载完毕
          // console.log(this.books)
          this.offset = this.books.length;//书的长度为offset偏移量
         }

          

        }
     ,
      
      // reading(){
      //   getBook().then((res)=>{
      //     let {data} = res;
      //     this.books = data
      //   })
      // },
      remove(id){
        removeBook(id).then((res)=>{
          let {data} = res;
          this.books = this.books.filter(item => item.bookId !== id)

        })
      }


    },
    created(){
     // this.reading()
     this.getData()
    }

  }
</script>
<style type="text/css" scoped lang="scss">
h3{
  margin-top:40px;
  color:#999999;
  width:90%;
  margin:10px auto;

}
ul{
  width:90%;
  margin:0 auto;
  

  li{
     display:flex;
    // flex-wrap:wrap;
  border:1px solid #ccc;
    padding:10px 0 ;
    
    margin-bottom:10px;
    border-radius:25px;
    img{
      width:140px;
      height:150px;
    }
    div{
      // text-align:center;
      margin-left:10px;
      h4{
        font-size:20px;
        line-height:25px;
      }
      p{
        color:#229990;
        line-height:25px;
      }
      b{
        color:red;

      }
      button{
        display:inline-block;
        width:80px;
        margin-right:5px;
        height:35px;
        background:orange;
        border:none;
        border-radius:15px;
        color:#ffffff;
        outline:none;

      }


      // text-align:center;
    }
  }

}
  
</style>