import Vue from 'vue'
import Vuex from 'vuex'
import control from './control'
import music from './music'
import player from './player'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules:{
        control,
        music,
        player
    },
})
export default store;