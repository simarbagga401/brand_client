import Vue from 'vue';
import VueX from 'vuex'
Vue.use(VueX);
// IMPORTING STATES
import serviceState from './services.js';
import users from './users.js';
export default new VueX.Store({
    state:{
        users,
        signInBool:false
    },
    mutations:{
        changeSignInBool(state){
            state.signInBool = true
        }
    },
    actions:{

    },
    getters:{
        getSignInBool:state => state.signInBool
    },
    modules:{
        serviceState
    }
});