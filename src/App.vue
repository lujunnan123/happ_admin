<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
  import hello from './components/hello.vue'
  export default{
    name:'App',
    components:{
      hello
    }
  }
</script>
<style scoped>
</style>