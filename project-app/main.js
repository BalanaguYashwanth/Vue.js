import Vue from 'vue'
import App from './App.vue'
import Vuerouters from 'vue-router'
import Routers from './router'

Vue.use(Vuerouters)

Vue.config.productionTip = false


const router= new Vuerouters({
  routes:Routers,
  mode:'history',
})

new Vue({
  render: h => h(App),
  router:router,
}).$mount('#app')

