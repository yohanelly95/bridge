import Vue from 'vue'
import App from './App.vue'
import Skale from './SkaleBridge.vue'
import Meter from './MeterBridge.vue'
import Moonbeam from './MoonbeamBridge.vue'
import AlgorandBridge from './AlgorandBridge'

Vue.config.productionTip = false
// console.log('lol',process.env.VUE_APP_NETWORK)
if (process.env.VUE_APP_NETWORK === "algorand") {
  new Vue({
      render: h => h(AlgorandBridge),
  }).$mount('#app')
} else if (process.env.VUE_APP_NETWORK === "matic") {
    new Vue({
        render: h => h(App),
    }).$mount('#app')
} else if (process.env.VUE_APP_NETWORK === "skale") {
    new Vue({
        render: h => h(Skale),
    }).$mount('#app')
}
else if (process.env.VUE_APP_NETWORK === "moonbeam") {
    new Vue({
        render: h => h(Moonbeam),
    }).$mount('#app')
} else if (process.env.VUE_APP_NETWORK === "meter") {
    new Vue({
        render: h => h(Meter),
    }).$mount('#app')
}
