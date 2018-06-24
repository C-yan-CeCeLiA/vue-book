<template>
  <div>
    <MHeader>收藏</MHeader>
    <div class="content">
      <ul>
        <li>
          <label for="bookName">书名
            <input type="text" v-model="book.bookName" name="" id="bookName">
          </label>
        </li>
        <li>
           <label for="bookInfo">信息
            <input type="text" v-model="book.bookInfo" name="" id="bookInfo">
          </label>
        </li>
        <li>
          <label for="bookPrice">价格
            <input type="text" v-model.number="book.bookPrice" name="" id="bookPrice">
          </label>
        </li>
        <li>
          <label for="bookCover">封面
            <input type="text" v-model="book.bookCover" name="" id="bookCover">
          </label>
        </li>
        <li>
          <button @click="Add">添加</button>
        </li>
        

      </ul>
      

    </div>
  </div>
  
</template>
<script type="text/javascript">
import MHeader from "../base/MHeader.vue";
import {add} from "../api";
  export default {
    name:"add",
    data(){
      return {book:{}}
    },
    methods:{
      Add(){
        add(this.book),
        this.$router.push("/list")
      }
    },
    components:{
      MHeader
    }
  }

</script>
<style lang="scss" scoped="">
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