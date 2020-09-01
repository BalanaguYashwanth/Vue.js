import customerpage from './components/customerpage'
import ownerpage from './components/ownerpage'
import ownerregistrationpage from './components/ownerregisterpage'
import ownerlogin from './components/ownerlogin.vue'
import alluserprofiles from './components/alluserprofiles.vue'


export default[
    {path:'/customerpage',component:customerpage},
    {path:'/ownerpage',component:ownerpage},
    {path:'/ownerregistrationpage',component:ownerregistrationpage},
    {path:'/ownerlogin',component:ownerlogin},
    {path:'/alluserprofiles',component:alluserprofiles}
]