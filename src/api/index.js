// 对API统一管理
import request from './request'
// 对外暴露登录接口函数
export function login(data) {
    return request({
      url: '/admin/index/login',
      method: 'post',
      data
    })
  }
// 请求商品信息
export function getgoodsinfo(){
  return request({
    url:'/admin/goods',
    method:'post'
  })
}
// 请求用户信息
export function getuserinfo(){
  return request({
    url:'/admin/userInfo',
    method:'post'
  })
}
// 请求订单信息
export function getorderinfo(){
  return request({
    url:'/admin/order',
    method:'post'
  })
}

// 发送用户注册信息
// export const SendUserInfo = (username,password,tel) => Requests({url:"/register",method:'post',data:{username,password,tel}});
// 发送用户登录信息
// export const SendUserLogin = (tel,password) => Requests({url:"/login",method:'post',data:{tel,password}});