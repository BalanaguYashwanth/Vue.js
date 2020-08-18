import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import Vuerouters from 'vue-router'
import Routers from './routers'

Vue.use(VueResource)
Vue.use(Vuerouters)

Vue.config.productionTip = false
export const bus = new Vue()


Vue.directive('size', {
  bind(el, binding){
      if (binding.value == 'wide'){
          el.style.maxWidth = "1260px";
      } 
      if(binding.arg == 'column'){
          el.style.background = '#ddd';
          el.style.padding = '20px';
      }
  }
});

const router = new Vuerouters({
  routes:Routers,
  mode:'history',
})


Vue.filter('short',function(value){
  return value.slice(0,100)+".."
})


new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')
