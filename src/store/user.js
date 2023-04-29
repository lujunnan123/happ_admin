import {getuserinfo} from '@/api'
import { reqDeleteUser } from '@/api';
const state = {
    usersinfo:{}
};
const actions = {
    async sendUser({commit}){
        let result = await getuserinfo();
        if(result.data.code === 200){
            commit('GETUSERINFO',result.data)
        }
    },
    async deleteUser({commit},data){
        let result = await reqDeleteUser(data);
        if(result.data.code === 200){
            return 'ok'
        }else{
            return Promise.reject(new Error('falie'))
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