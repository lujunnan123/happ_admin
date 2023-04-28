import {getuserinfo} from '@/api'
const state = {
    usersinfo:{}
};
const actions = {
    async sendUser({commit}){
        let result = await getuserinfo();
        if(result.data.code === 200){
            commit('GETUSERINFO',result.data)
        }
    }
};
const mutations = {
    GETUSERINFO(state,usersinfo){
        state.usersinfo = usersinfo
    }
};
const getters = {
   usersinfo(state){
    return state.usersinfo.data
   }
}
export default{
    state,
    actions,
    mutations,
    getters
}