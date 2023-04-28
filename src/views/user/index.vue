<template>
  <div>
    <TypeNav></TypeNav>
    <div class="goodstable"> 
      <h1>用户账号管理</h1>     
      <el-table :data="usersinfo" border style="width: 100%">
        <!-- <el-table-column fixed prop="h_images" label="图片" width="150">
        </el-table-column> -->
        
        <el-table-column prop="username" label="用户名" width="200">
        </el-table-column>
        <el-table-column prop="password" label="密码" width="200">
        </el-table-column>
        <el-table-column prop="tel" label="电话" width="200">
        </el-table-column>
        <el-table-column  label="操作" width="200">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

  export default{
    name:'user',
    mounted() {
      this.getdata();
    },
    methods: {
      getdata(){
        this.$store.dispatch('sendUser');
      },
      handleClick(row) {
        console.log(row);
      }
    },
    computed:{
      ...mapGetters({usersinfo:"usersinfo"})
    }
  }
</script>
<style scoped>

.goodstable{
  float: left;
  margin-top: 50px;
  margin-left: 50px;
  height: 100vh; 
}
</style>