import Vue from 'vue'
import Vuex from 'vuex'
import navilist from './modules/navilist'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        navilist,
    }
});