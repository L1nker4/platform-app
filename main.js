import Vue from 'vue'
import App from './App'

import uView from "uview-ui";
Vue.use(uView);

// vuex
import store from '@/store'

Vue.config.productionTip = false

// 引入uView提供的对vuex的简写法文件
let vuexStore = require('@/store/$u.mixin.js')
Vue.mixin(vuexStore)

App.mpType = 'app'

const app = new Vue({
	store,
    ...App
})
app.$mount()
