<template>
  <div>
    <MHeader :back="true">详情</MHeader>
    <div class="content">
      <ul>
        <li>
          <label for="bookName">书名</label>
          <input type="text" v-model="book.bookName" name="" id="bookName">
        </li>
        <li>
          <label for="bookInfo">信息</label>
          <input type="text" v-model="book.bookInfo" name="" id="bookInfo">
        </li>
         <li>
          <label for="bookPrice">价格</label>
          <input type="text" v-model.number="book.bookPrice" name="" id="bookPrice">
        </li>
        <li>
          <button @click="updata">确定</button>
        </li>
      </ul>

    </div>
    
  </div>
</template>
<script type="text/javascript">
import MHeader from "../base/MHeader.vue";
import {findOneBook,upData} from "../api";



  export default {
    name:"datel",
    data(){
      return {book:{}}
    },
    watch:{
      $route(){
        this.getData()
      }
    },
    created(){
      this.getData()
      console.log(this.bid)
    },
    methods:{
      updata(){
        upData(this.bid,this.book),
        //将修改的数据提交上去
        this.$router.push("/list")
      },
      getData(){
        findOneBook(this.bid).then((res)=>{
         let{data} = res;
          this.book = data
          Object.keys(this.book).length >0 ?void 0 :this.$router.push("/list");//void 0  什么都不做 计算一个表达式，但是什么都不做
        })
      }
    },
    computed:{
      bid(){
        return this.$route.params.id
      }
    },
    components:{
      MHeader
    }


  }
</script>
<style  scoped lang="scss">
  .content{
    position: absolute;
    left:0;
    right: 0;
    top: 0;
    bottom:0;
    z-index: 100;
    background: #fff;

  }
 
  li{
    label{
      font-size:25px;
    }
    input{
      font-size:25px;
      border-radius:15px;
      width:100%;
    }
    button{
      font-size:25px;
      border-radius:5px;
      background:red;
    }

  }

   

  

</style>