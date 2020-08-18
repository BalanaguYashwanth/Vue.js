import showblogs from './components/showblogs' 
import addblog from './components/addblog.vue'
import singleblog from './components/singleblog.vue'

export default[
    {path:'/',component:showblogs},
    {path:'/add',component:addblog},
    {path:'/:id',component:singleblog},

]

