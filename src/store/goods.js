import {getgoodsinfo} from '@/api';
import { reqdeleteGoods } from '@/api';
const state = {
    goodsinfo:{}
}
const actions = {
    async getGoods({commit}){   
        let result = await getgoodsinfo();
        if(result.data.code === 200){
            commit('GETGOODSINFO',result.data);
        }
    },
    async deleteGoods({commit},data){
        let result = await reqdeleteGoods(data);
        if(result.data.code === 200){
            return 'ok'
        }else{
            return Promise.reject(new Error('falie'));
        }
    }
}
const mutations = {
    GETGOODSINFO(state,goodsinfo){
        state.goodsinfo = goodsinfo
    }
}
const getters = {
    goodslist(state){
        return state.goodsinfo.data
    }
}
export default {
    state,
    actions,
    mutations,
    getters
}