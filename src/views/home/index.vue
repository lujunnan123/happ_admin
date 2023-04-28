<template>
  <div>
    <TypeNav></TypeNav>
    <div class="content">
        <h1>Welcome to back!{{ adminInfo[0].username }}</h1>
        <div class="calendar">
          <Calendar/>
        </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import Calendar from './Calendar .vue'
  export default{
    name:'home',
    computed:{
        ...mapGetters({adminInfo:'adminInfo'})
    },
    components:{
      Calendar
    }
  }
</script>
<style scoped>
    .content{
      float: left;
      margin-left: 50px;
      height: 100vh; 
    }
    .calendar{
      width: 800px;
      height: 200px;
    }
</style>