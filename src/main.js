import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueResource from 'vue-resource'

Vue.config.productionTip = false
Vue.use(VueResource)

export const eventBus = new Vue()

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
