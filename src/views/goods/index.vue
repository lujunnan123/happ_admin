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
        <el-table-column prop="h_package" label="包装" width="300">
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
            <!-- <el-button type="text" size="small">编辑</el-button> -->
            <el-button type="text" @click="dialogFormVisible = true" size="small">编辑</el-button>
            <!-- 编辑页面Dialog -->
            <el-dialog append-to-body title="修改信息" :visible.sync="dialogFormVisible">
              <el-form :model="form">
                <el-form-item label="花名" :label-width="formLabelWidth">
                  <el-input  autocomplete="off"  v-model="goodslist[0].h_name"></el-input>
                </el-form-item>
                <el-form-item label="分类" :label-width="formLabelWidth">
                  <el-input v-model="goodslist[0].h_kind" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="价格" :label-width="formLabelWidth">
                  <el-input v-model="goodslist[0].h_price" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="存库数量" :label-width="formLabelWidth">
                  <el-input v-model="goodslist[0].h_number" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="花语" :label-width="formLabelWidth">
                  <el-input v-model="goodslist[0].h_say" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="材料" :label-width="formLabelWidth">
                  <el-input v-model="goodslist[0].h_desc" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="包装" :label-width="formLabelWidth">
                  <el-input v-model="goodslist[0].h_package" autocomplete="off"></el-input>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
              </div>
            </el-dialog>
            
          </template>
        </el-table-column>
      </el-table>
    </div>

  </div>
</template>
<script>
import goods from '@/store/goods';
import { mapGetters } from 'vuex';
export default {
  name: 'goods',
  data() {
    return {
      // 编辑框配置
      dialogFormVisible: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''

      },
      formLabelWidth: '120px'
    }
  },
  mounted() {
    this.goGoods()
  },

  methods: {
    goGoods() {
      this.$store.dispatch('getGoods')
    },
    handleClick(row) {
      // elementUI弹窗
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // 发送删除信息请求       
        this.$store.dispatch('deleteGoods', row);
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
        // 重新请求更新后的数据
        this.goGoods()
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    }
  },
  computed: {
    ...mapGetters({ goodslist: 'goodslist' })
  }

}
</script>
<style scoped>
.goodstable {
  float: left;
  width: 1000px;
  margin-top: 50px;
  margin-left: 50px;
  height: 100vh;
}
</style>