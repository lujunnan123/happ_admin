// 对axios进行二次封装
import axios from 'axios';

// 1.利用axios对象的方法create，去创建一个axios实例
// 2.request就是axios，只不过稍微配置下
const request = axios.create({
    // 配置对象 
    baseURL:"/api",
    timeout:5000,
});
// 请求拦截器
request.interceptors.request.use((config)=>{
    return config
})
// 响应拦截器
/* request.interceptors.response.use((res)=>{
    return res.data
,(error)=>{
    return Promise.reject(new Error('faile'))
}}) */
export default request