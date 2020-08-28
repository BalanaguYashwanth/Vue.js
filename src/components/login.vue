<template>
    <div>
        <label> Username
        <input type="text" v-model="username" placeholder="enter the name"/>
         </label>
        <label> Passsword 
        <input type="password" v-model="password"  placeholder="enter the password"/>
        </label>
        <button v-on:click="login"> submit </button>   <router-link to='/register'>  <button> Register  </button> </router-link>       
        <br>
        {{info}}  
    </div> 
</template>
<script>
import axios from 'axios'
import {bus} from '../main'
export default {
    data(){
        return{
            info:'',
            token:'',
            username:"",
            password:"",
        }
    },  
    methods:{
        login:function(){
         axios.post('http://127.0.0.1:8000/todoauth/login',{
         username:this.username,
         password:this.password,
         }).then(response=>{
             if(response.status>='200' && response.status<'250')                                                                                                                                                                                                                                                                                                                                                                                                                     
             {
                bus.$emit('username',this.username);
                this.info="successfully logged in";
                this.token=response.data.token;
                localStorage.setItem('user-token',response.data.token);
             }
            console.log(response.status);
            this.redirect();
         }).catch((error) => {
            localStorage.removeItem('user-token');
          console.log(error.response.data);
          this.info=error.response.data;
        });
        },
        redirect(){
            this.$router.push({path:'/todo'})
        },
    }
}

</script>
<style lang="stylus" scoped>
label{
    display:block;
}

</style>