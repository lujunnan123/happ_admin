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
        <el-table-column prop="username" label="昵称" width="150">
        </el-table-column>
        <el-table-column prop="tel" label="电话" width="120">
        </el-table-column>
        <el-table-column prop="h_name" label="花名" width="120">
        </el-table-column>
        <el-table-column prop="buy_num" label="购买数量" width="120">
        </el-table-column>
        <el-table-column prop="buy_date" label="下单时间" width="120">
        </el-table-column>
        <el-table-column label="操作" width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
            <el-button type="text" @click="dialogFormVisible = true" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
       <!-- 编辑页面Dialog -->
       <el-dialog append-to-body title="修改信息" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="昵称" :label-width="formLabelWidth">
            <el-input autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="电话" :label-width="formLabelWidth">
            <el-input  autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="花名" :label-width="formLabelWidth">
            <el-input  autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="购买数量" :label-width="formLabelWidth">
            <el-input  autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

  export default{
    name:'order',
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
      this.getdata();
    },
    methods: {
      getdata(){
        this.$store.dispatch('getOrder');
      },
      handleClick(row) {
      // elementUI弹窗
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => { 
        // 发送删除信息请求       
        this.$store.dispatch('deleteOrder',row);
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
        // 重新请求更新后的数据
        this.getdata()
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
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