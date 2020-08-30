import Vue from 'vue'
import App from './App.vue'
import Vuerouters from 'vue-router'
import Routers from './router'
import VueSimpleAlert from "vue-simple-alert";
import firebase from 'firebase/app';
import 'firebase/database'; // If using Firebase database
import 'firebase/storage';  // If using Firebase storage
import 'firebase/auth'
import 'firebase/firestore'

Vue.use(Vuerouters)
Vue.use(VueSimpleAlert,{ reverseButtons: true });
Vue.config.productionTip = false


const router= new Vuerouters({
  routes:Routers,
  mode:'history',
})

new Vue({
  render: h => h(App),
  router:router,
}).$mount('#app')

var firebaseConfig = {
  apiKey: "AIzaSyAsReQvLqNvyHHFdkNMgswzlkHsqn4b-eg",
  authDomain: "alarm-a709f.firebaseapp.com",
  databaseURL: "https://alarm-a709f.firebaseio.com",
  projectId: "alarm-a709f",
  storageBucket: "alarm-a709f.appspot.com",
  messagingSenderId: "123772005102",
  appId: "1:123772005102:web:4a4c7b274bc0e58edb61ff"
};

firebase.initializeApp(firebaseConfig);
