<template>
    <div class="typenav">
        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
            <el-radio-button :label="false">展开</el-radio-button>
            <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group>
        <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
            :collapse="isCollapse">
          
            <el-menu-item index="1" @click="goHome">
                <i class="el-icon-position"></i>
                <span slot="title">首页</span>
            </el-menu-item>
            <el-menu-item index="2" @click="goGoods">
                <i class="el-icon-menu"></i>
                <span slot="title" >商品管理</span>
            </el-menu-item>
            <el-menu-item index="3"  @click="goOrder">
                <i class="el-icon-document"></i>
                <span slot="title">订单管理</span>
            </el-menu-item>
            <el-menu-item index="4" @click="goUser">
                <i class="el-icon-user"></i>
                <span slot="title" >用户管理</span>                
            </el-menu-item>
            <el-submenu index="5">
                <template slot="title">
                    <i class="el-icon-s-data"></i>
                    <span slot="title" >图表分析</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="5-1"  @click="goChart1">鲜花种类销售情况</el-menu-item>
                    <el-menu-item index="5-2"  @click="goChart2">鲜花日销售情况</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
    </div>
</template>
<script>
export default {
    name: 'typenav',
    data() {
        return {
            isCollapse: true
        };
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        // 路由跳转
        goHome(){
            this.$router.push('/home')
        },
        goGoods(){
            this.$router.push('/goods')
        },
        goOrder(){
            this.$router.push('/order')
        },
        goUser(){
            this.$router.push('/user')
        },
        goChart1(){
            this.$router.push('/chart/chart1')
        },
        goChart2(){
            this.$router.push('/chart/chart2')
        }
    }
}
</script>
<style scoped>
.typenav{
    /* position: absolute; */
    float: left;
    left: 0;
    top: 0;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
</style>