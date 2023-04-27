<template>
  <div>
    <TypeNav></TypeNav>
    <div class="content">
        <p>welcome to back!{{ userInfo[0].username }}</p>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
  export default{
    name:'home',
    computed:{
        ...mapGetters({userInfo:'userInfo'})
    }
  }
</script>
<style scoped>
    .content{
        padding-top: 50px;
        margin-left: 20px;
    }
</style>