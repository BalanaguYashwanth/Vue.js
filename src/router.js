import customerpage from './components/customerpage'
import ownerpage from './components/ownerpage'
import ownerregistrationpage from './components/ownerregisterpage'
import ownerlogin from './components/ownerlogin.vue'
import alluserprofiles from './components/alluserprofiles.vue'
import customerlogin from './components/customerlogin'
import customerregister from './components/customerregister'

export default[
    {path:'/customerpage',component:customerpage},
    {path:'/ownerpage',component:ownerpage},
    {path:'/ownerregistrationpage',component:ownerregistrationpage},
    {path:'/ownerlogin',component:ownerlogin},
    {path:'/alluserprofiles',component:alluserprofiles},
    {path:'/customerregister',component:customerregister},
    {path:'/customerlogin',component:customerlogin}
]

