import {getgoodsinfo} from '@/api';
const state = {
    goodsinfo:{}
}
const actions = {
    async getGoods({commit}){   
        let result = await getgoodsinfo();
        if(result.data.code === 200){
            commit('GETGOODSINFO',result.data);
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