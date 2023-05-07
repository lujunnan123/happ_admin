import VueRouter from "vue-router";
import Login from "@/views/login";
import Home from "@/views/home";
import Goods from "@/views/goods";
import Chart1 from "@/views/chart/chart1";
import Chart2 from "@/views/chart/chart2"
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
        },{
            path:'/order',
            component:Order  
        },
        {
            path:'/chart/chart1',
            component:Chart1 
        },
        {
            path:'/chart/chart2',
            name:'chart2',
            component:Chart2  
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