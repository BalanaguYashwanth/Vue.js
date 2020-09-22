import owneregister from './components/ownerregister'
import ownerlogin from './components/ownerlogin'
import component from './components/component'
import customerregister from './components/customerregister'
import customerlogin from './components/customerlogin'
import customer from './components/customer'
import updates from './components/updates'
import updatesComponents from './components/updates-components'
import ownerhistory from './components/ownerhistory'
import choose from './components/choose'
import Vue from 'vue'
import Vuerouters from 'vue-router'

Vue.use(Vuerouters)

const router=new Vuerouters({
    mode:'history',
    routes:[
        {path:'/ownerregister',name:'owner-register',component:owneregister},
        {path:'/ownerlogin',name:'owner-login',component:ownerlogin},
        {path:'/component',component:component},
        {path:'/customerregister',name:'customer-register',component:customerregister},
        {path:'/customerlogin',name:'customer-login',component:customerlogin},
        {path:'/customer',component:customer},
        {path:'/updates',component:updates, props: true},
        {path:'/updatesComponents',component:updatesComponents, props: true},
        {path:'/ownerhistory',component:ownerhistory},
        {path:'/choose',name:'choose',component:choose},
    ],
  });

const openRoutes=['owner-login','owner-register','customer-login','customer-register','choose']

router.beforeEach((to, from, next) => {
    
    if(openRoutes.includes(to.name)  ){
      next()
    } else if (localStorage.getItem('user-token')){
      next()
    }else{
      next('/choose')
    }

})

export default router
