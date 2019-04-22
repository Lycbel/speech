import 'babel-polyfill'
import * as Vue from 'vue/dist/vue.min.js'
import './global.js'
import './mixins/globalMixin.js'
import App from './App'
import store from './store/index'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Api from './helper/apis/speechApi'
import utils from './helper/utils'
/* Configure whether to allow vue-devtools inspection. */
Vue.config.devtools = process.env.NODE_ENV !== 'production'
Vue.prototype.$bus = new Vue()
/* Suppress all Vue logs and warnings. */
Vue.config.silent = process.env.NODE_ENV === 'production'

/* Set this to false to prevent the production tip on Vue startup(2.2.0+). */
Vue.config.productionTip = process.env.NODE_ENV !== 'production'
Vue.prototype.$api = new Api(Vue.prototype.$bus)
Vue.prototype.$utils = utils
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#root')
