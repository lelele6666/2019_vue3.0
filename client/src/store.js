import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const types = {
  SET_AUTHENTICATED: "SET_AUTHENTICATED",
  SET_USER:'SET_USER',
}

export default new Vuex.Store({
  state: {
      isAuthenticated:false,        //授权
      user:{}                       //用户登录
  },
  getters:{
      isAuthenticated: state => state.isAuthenticated,
      user: state => state.user
  },
  mutations: {
    [types.SET_AUTHENTICATED](state,isAuthenticated){
      // 如果授权有值
      if(isAuthenticated){
        state.isAuthenticated = isAuthenticated
      }else{
        state.isAuthenticated = false
      }
    },
    [types.SET_USER](state,user) {
      if(user) {
        state.user = user
      } else {
        state.user = {}
      }
    },
  },
  actions: {
    setAuthenticated({ commit }, isAuthenticated) {
      commit(types.SET_AUTHENTICATED, isAuthenticated);
    },
    setUSER({commit},user){
      commit(types.SET_USER,user)
    },
    createUser:({commit}) => {
      commit(types.SET_AUTHENTICATED,false)
      commit(types.SET_USER,null)
    }
  }
})
