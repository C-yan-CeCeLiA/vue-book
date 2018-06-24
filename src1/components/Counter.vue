<template>
  <div>
    <button @click="add">+</button>
    <div>当前：{{$store.state.count}}</div>
    <button @click="minus">-</button>
    <p>{{$store.getters.val}}</p>
  </div>
</template>
<script type="text/javascript">

  export default {
    data(){
      return {}
    },
    methods:{
      add(){
        this.$store.commit('add')

      },
      minus(){
        this.$store.commit("minus")
      }
    }
  }  
</script>