import VueRouter from "vue-router";
import Login from "@/views/login";
import Home from "@/views/home";
import Goods from "@/views/goods";
import Chart from "@/views/chart";
import Order from "@/views/order";
import User from "@/views/user";

// 创建一个路由器
const router = new VueRouter({
    routes:[
        {
            path:'/login',
            component:Login
        },
        {
            path:'/home',
            component:Home  
        },
        {
            path:'/goods',
            component:Goods  
        },
        {
            path:'/user',
            component:User  
        },
        {
            path:'/order',
            component:Order  
        },
        {
            path:'/chart',
            component:Chart  
        },
        {
            // 重定向：在项目跑起来的时候，访问/，立马让他定向到首页
            path:'*',
            redirect:'/login',
            meta:{show:false}
        }
    ]
})
// 向外暴露
export default router