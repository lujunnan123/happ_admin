import {getorderinfo} from '@/api';
import { reqDeleteOrder } from '@/api';
const state = {
    ordersinfo:{}
}
const actions = {
    async getOrder({commit}){   
        let result = await getorderinfo();
        if(result.data.code === 200){
            commit("GETORDERINFO",result.data)
        }       
    },
    async deleteOrder({commit},data){
        let result = await reqDeleteOrder(data);
        console.log(result);
        if(result.data.code === 200){
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'))
        }   
    }
}
const mutations = {
    GETORDERINFO(state,ordersinfo){
        state.ordersinfo = ordersinfo
    }
}
const getters = {
   orderlist(state){
    return state.ordersinfo.data
   }
}
export default {
    state,
    actions,
    mutations,
    getters
}