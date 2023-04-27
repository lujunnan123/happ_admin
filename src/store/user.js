import {login} from '@/api'
const state = {
    admininfo:{}
};
const actions = {
    async sendAdminInfo({commit},data){
        let result = await login(data);
        if(result.data.code === 200){
            commit('SENDADMININFO',result.data)
        }
    }
};
const mutations = {
    SENDADMININFO(state,admininfo){
        state.admininfo = admininfo
    }
};
const getters = {
    userInfo(state){
        return state.admininfo.data
    }
}
export default{
    state,
    actions,
    mutations,
    getters
}