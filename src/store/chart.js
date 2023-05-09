import {getorderinfo} from'@/api'
const state={
    orderinfo:[] // 数据类型：[{},{},{}]
};
const actions={
    async getdata({commit}){
        let result = await getorderinfo();
        if(result.data.code == 200){
            commit('GETORDER',result.data)
        }
    }
};
const mutations={
    GETORDER(state,orderinfo){
        state.orderinfo = orderinfo.data
    }
};
const getters={
    chartinfo(state){
        // 使用reduce对订单数据进行统计
        const summary = state.orderinfo.reduce((acc,cur)=>{
            // 检查当前订单中的花名是否已存在统计结果中
            const index = acc.findIndex(item=>item.h_name === cur.h_name);
            if(index != -1){
                // 如果花存在，则更新该订单对应的购买数量
                acc[index].buy_num += cur.buy_num;
            }else{
                // 如果花不存在，则将该订单添加到统计结果中
                acc.push({h_name:cur.h_name,buy_num:cur.buy_num});
            }
            return acc
        },[]);
        // 加工数据 json ==> [[],[],[]...]
       let info = []
       for(let i=0;i<summary.length;i++){
        info.push(Object.values(summary[i]));
       }
       return info
    },
    chartinfo2(state){
        // 使用reduce对订单数据进行统计
        const summary = state.orderinfo.reduce((acc,cur)=>{
            // 检查当前订单中的花名是否已存在统计结果中
            const index = acc.findIndex(item=>item.buy_date === cur.buy_date);
            if(index != -1){
                // 如果花存在，则更新该订单对应的购买数量
                acc[index].buy_num += cur.buy_num;
            }else{
                // 如果时间不存在，则将该订单添加到统计结果中
                acc.push({buy_date:cur.buy_date,buy_num:cur.buy_num});
            }
            return acc
        },[]);
        // 加工数据 json ==> [[],[],[]...]
       let info = []
       for(let i=0;i<summary.length;i++){
        info.push(Object.values(summary[i]));
       }
       return info
    }
}
export default {
    state,
    actions,
    mutations,
    getters
}