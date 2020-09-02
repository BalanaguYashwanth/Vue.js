import customerpage from './components/customerpage'
import ownerpage from './components/ownerpage'
import ownerregistrationpage from './components/ownerregisterpage'
import ownerlogin from './components/ownerlogin.vue'
import alluserprofiles from './components/alluserprofiles.vue'
import customerlogin from './components/customerlogin'
import customerregister from './components/customerregister'
import bookings from './components/bookings'
import suggestions from './components/suggestions'
import headers from './components/headers'

export default[
    {path:'/customerpage',component:customerpage},
    {path:'/ownerpage',component:ownerpage},
    {path:'/ownerregistrationpage',component:ownerregistrationpage},
    {path:'/ownerlogin',component:ownerlogin},
    {path:'/alluserprofiles',component:alluserprofiles},
    {path:'/customerregister',component:customerregister},
    {path:'/customerlogin',component:customerlogin},
    {path:'/bookings',component:bookings},
    {path:'/suggestions',component:suggestions},
    {path:'/headers',component:headers},
]

