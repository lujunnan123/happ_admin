<template>  
<div class="contentbg">  
  <div class="login-container"> 
    <h1>花殿管理用户登录</h1>
    <el-form id="adminform" :model="form" ref="loginForm">  
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
/* 清除input框原有样式 */
  input{
    clear: both;
    border: none;
  }
  .contentbg{
    padding: 20px;  
    position: fixed;  
    top: 0;  
    left: 0; 
    z-index: 9999;  
    width: 100%;  
    height: 100vh; 
    background-image: url(~@/assets/bg1.jpg);  
    background-size: cover;  
    background-position: center;  
  }

  .login-container {
    width: 600px;
    height: 400px;
    margin: 0px auto 40px auto;
    color: #fff;
    text-align: center;
    /* 
    font-size: 26px;
    font-weight: bold; */
  }

  .el-input {
    /* display: inline-block;
    width: 85%; 
    padding: 12px 5px 12px 15px;
    color: #fff;
    height: 47px;
    caret-color: #fff; */
    background-color: rgba(0,0,0,0)/*透明背景颜色*/ ; 
    border: none; /*无边框*/  
  }
  
 
</style>