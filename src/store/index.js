import Vue from "vue";
import Vuex from "vuex";
import login from "./login";
import goods from "./goods";
import user from "./user"
import order from "./order"
Vue.use(Vuex);
export default new Vuex.Store({
    modules:{
        login,
        goods,
        user,
        order
    }
})