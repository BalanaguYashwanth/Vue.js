<template>
    <h1 id="appi"> 
        Do it now
        <input v-on:keyup.enter="logname" />
        <br>

        <input type='text' v-model='name' />
        <br>
        <input type='number' v-model='age'/>
        <br>

        <span> {{name}} </span>
        <span> {{age}} </span>
  
    </h1>
</template>

<script>
export default {
    data(){
        return{
            'name':"",
            'age':"",
        }
    },

    methods:{
        logname:function(){
           console.log("you entered data");
        }
    }
 
}
</script>

<style>

</style>