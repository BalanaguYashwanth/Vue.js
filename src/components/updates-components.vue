<template>
    <div class="container">
        <div id="title">
            <h1 class="display-3"> Components </h1>
            
            <div v-for="(item,index) in getlocal()" v-bind:key="index" >
                {{item}}

            </div>
            {{getlocal()}}
          
        
        </div>
    </div>
</template>
<script>
export default {

    data(){
        return{
            username:"",
           
        }
    },

    methods:{
    getlocal:function(){
        let uniquedata1=localStorage.getItem('uniquedata');
        let mainarray=uniquedata1.split(',')
        
        return mainarray
    },

    user:function(){
        let user= this.$store.state.profile
         user.forEach( detail => {
            this.username=detail.username 
        })
        return this.username
    }

    },    

    created(){
       
    },

    mounted(){
        return this.$store.dispatch("getprofile");
    },


   


}
</script>

<style >

</style>