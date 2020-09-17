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

export default[
    {path:'/ownerregister',component:owneregister},
    {path:'/ownerlogin',component:ownerlogin},
    {path:'/component',component:component},
    {path:'/customerregister',component:customerregister},
    {path:'/customerlogin',component:customerlogin},
    {path:'/customer',component:customer},
    {path:'/updates',component:updates, props: true},
    {path:'/updatesComponents',component:updatesComponents, props: true},
    {path:'/ownerhistory',component:ownerhistory},
    {path:'/choose',component:choose},
]