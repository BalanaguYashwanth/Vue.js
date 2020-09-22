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

// const router=new Vuerouters({
//   routes:Routers,
//   mode:'history',
// });

// const openRoutes=['owner-login','owner-register','customer-login','customer-register']

// router.beforeEach((to,from,next)=>{

//     if(openRoutes.includes(to.name)){
//         next()
//     }else if(localStorage.getItem('user-token')){
//         next()
//     }else{
//         next( 'choose' )
//     }

// })



new Vue({
  render: h => h(App),
  router:Routers,
  store:store,
}).$mount('#app')

