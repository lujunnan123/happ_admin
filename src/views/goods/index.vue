<template>
  <div>
    <TypeNav></TypeNav>
    <div class="goodstable">  
      <h1>店铺商品管理</h1>    
      <el-table :data="goodslist" border style="width: 100%">
        <!-- <el-table-column fixed prop="h_images" label="图片" width="150">
        </el-table-column> -->
        <el-table-column fixed prop="h_id" label="id" width="100">
        </el-table-column>
        <el-table-column prop="h_name" label="花名" width="150">
        </el-table-column>
        <el-table-column prop="h_kind" label="分类" width="120">
        </el-table-column>
        <el-table-column prop="h_price" label="价格" width="120">
        </el-table-column>
        <el-table-column prop="h_number" label="存库数量" width="120">
        </el-table-column>
        <el-table-column prop="h_say" label="花语" width="300">
        </el-table-column>
        <el-table-column prop="h_desc" label="材料" width="300">
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
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
export default {
  name: 'goods',
  mounted() {
    this.goGoods()
  },
 
  methods: {
    goGoods() {
      this.$store.dispatch('getGoods')
    },
    handleClick(row) {
        console.log(row);
      }
  },
  computed: {
    ...mapGetters({ goodslist: 'goodslist' })
  }

}
</script>
<style scoped>
.goodstable{
  float: left;
  width: 1000px;
  margin-top: 50px;
  margin-left: 50px;
  height: 100vh; 
}
</style>