import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({

    state:{
        logindata:'',

    },

   mutations:{
       updatedata(state,{data}){
           state.logindata=data
       }
   },

   actions:{
    //    logindetails(context,userdata){
    //         return new Promise((resolve,reject)=>{
                
    //         })

    //    }
   }

})




