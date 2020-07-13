import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        hasLogin: false,
        userName: "",
		token: '',
		userInfo:{}
    },
    mutations: {
        login(state, userName) {
            state.userName = userName || '新用户';
            state.hasLogin = true;
			uni.getStorage({
				key:"token",
				success(res){
					state.token = res.data
				}
			})
			uni.getStorage({
				key:"userInfo",
				success(res){
					state.userInfo = res.data
				}
			})
        },
        logout(state) {
            state.hasLogin = false;
			state.userId = ''
			state.userInfo = {}
			state.token = ''
			uni.removeStorage({
			    key: 'token'  
			})
			uni.removeStorage({  
			    key: 'userInfo'  
			})
			uni.removeStorage({
			    key: 'deptInfo'  
			})
			uni.removeStorage({
			    key: 'userId'  
			})
        }
    }
})

export default store
