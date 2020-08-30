import home from './components/home.vue'
import message from './components/message.vue'
import alldetails from './components/alldetails.vue'
import signup from './components/signup.vue'
import signin from './components/signin'

export default[
    {path:'/',component:home},
    {path:'/message',component:message},
    {path:'/alldetails',component:alldetails},
    {path:'/signup',component:signup},
    {path:'/signin',component:signin}
]