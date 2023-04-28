import {getorderinfo} from '@/api';
const state = {
    ordersinfo:{}
}
const actions = {
    async getOrder({commit}){   
        let result = await getorderinfo();
        if(result.data.code === 200){
            commit("GETORDERINFO",result.data)
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