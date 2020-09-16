<template>
    <div class="container">

    <button id="logout" v-on:click="logout">logout</button>
    <h1 class="display-2" id="title">Updates</h1>

     {{allindividualdetails}}


    </div>
</template>
<script>
import datamixin from '../mixins/datamixin'
export default {

   
    data(){
        return{
            username:"",
           
        }
    },

    
    methods:{

    logout: function () {
      this.$router.push("/customerlogin");
    },



    user:function(){
        let user= this.$store.state.profile
         user.forEach( detail => {
            this.username=detail.username 
        })
        return this.username
    }

    },    

  

    mounted(){
        return this.$store.dispatch("getprofile");
    },


  mixins:[datamixin]


}
</script>

<style >

</style>