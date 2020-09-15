import Vue from 'vue'
import App from './App.vue'
import Vuerouters from 'vue-router'
import Routers from './router'
import Vuesimplealert from 'vue-simple-alert'
import {store} from './store/store'

export const bus = new Vue()

Vue.use(Vuerouters)
Vue.use(Vuesimplealert,{reverseButtons:true})

Vue.config.productionTip = false

const router=new Vuerouters({
  routes:Routers,
  mode:'history',
});

new Vue({
  render: h => h(App),
  router:router,
  store:store,
}).$mount('#app')
