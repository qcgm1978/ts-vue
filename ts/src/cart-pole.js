import Vue from 'vue'
import Cart from './Cart-pole.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Cart)
}).$mount('#cart-pole')
