import '@/assets/tailwind.css'
import vuetify from '@/plugins/vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from 'vue'
import App from './App.vue'
import { TextPad } from './components'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.component('TextPad', TextPad)

new Vue({
  router,
  store,
  vuetify,
  // tslint:disable-next-line: object-literal-sort-keys
  render: (h) => h(App),
}).$mount('#app')
