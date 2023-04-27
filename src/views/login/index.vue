<template>  
  <div class="login-container"> 
    <h1>花殿管理用户登录</h1>
    <el-form :model="form" ref="loginForm">  
      <el-form-item label="用户名">  
        <el-input v-model="form.username" placeholder="请输入用户名"></el-input>  
      </el-form-item>  
      <el-form-item label="密码">  
        <el-input v-model="form.password" type="password" placeholder="请输入密码"></el-input>  
      </el-form-item>  
      <el-form-item>  
        <el-button type="primary" @click="login()">登录</el-button>  
      </el-form-item>  
    </el-form>  
  </div>  
</template>  
  
<script>  
export default {  
  name:'login',
  data() {  
    return {  
      form: {  
        username: '',  
        password: ''  
      }  
    };  
  },  
  methods: {  
    login() {  
      // 调用登录接口 
      this.$store.dispatch('sendAdminInfo',this.form);
      // 路由跳转 
      this.$router.push({
        path:'/home'
      })
    }  
  }  
};  
</script>
<style scoped >
  .login-container {
    background: url(~@/assets/bg1.jpg);
    background-size: 100% 100%;
    color: #fff;
    font-size: 26px;
    margin: 0px auto 40px auto;
    text-align: center;
    font-weight: bold;
  }
  .el-input {
    display: inline-block;
    width: 85%; 
    background: transparent;
    border: 0px;
    border-radius: 0px;
    padding: 12px 5px 12px 15px;
    color: #fff;
    height: 47px;
    caret-color: #fff;
    background-color: rgba(0,0,0,0);
  }
  
 
</style>