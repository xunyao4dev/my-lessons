// #ifndef VUE3
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'

// 请特别注意pinia引用位置，否则会报错

import {
	createPinia
} from 'pinia'
import App from './App.vue'
export function createApp() {
	const app = createSSRApp(App)
	app.use(createPinia())

	return {
		app
	}
}
// #endif