<template>
  <div>
    <TypeNav></TypeNav>
    <div class="goodstable">  
      <h1>客户订单管理</h1>    
      <el-table :data="orderlist" border style="width: 100%">
        <!-- <el-table-column fixed prop="h_images" label="图片" width="150">
        </el-table-column> -->
        <el-table-column  prop="buy_id" label="id" width="100">
        </el-table-column>
        <el-table-column prop="tel" label="客户电话" width="150">
        </el-table-column>
        <el-table-column prop="h_id" label="花id" width="120">
        </el-table-column>
        <el-table-column prop="h_num" label="购买数量" width="120">
        </el-table-column>
        <el-table-column prop="buy_date" label="存库数量" width="120">
        </el-table-column>
        <el-table-column label="操作" width="100">
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
    name:'order',
    mounted() {
      this.getdata();
    },
    methods: {
      getdata(){
        this.$store.dispatch('getOrder');
      }
    },
    computed:{
      ...mapGetters({orderlist:"orderlist"})
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