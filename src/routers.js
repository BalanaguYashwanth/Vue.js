import login from './components/login.vue';
import todo from './components/todo.vue';
import register from './components/register.vue'
import nonVerify from './components/nonVerify.vue'

export default[
    {path:'/register',component:register},
    {path:'/login',component:login},
    {path:'/todo',component:todo},
    {path:'/nonVerify',component:nonVerify},
]

