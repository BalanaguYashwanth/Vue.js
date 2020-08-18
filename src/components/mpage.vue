<template>
    <div>
    <h1> This is mainpage </h1>
    <slot name="form">
    </slot>
    <ul> 
        <li v-for="(datas,index) in all" v-bind:key="index" v-on:click="datas.show=!datas.show" > 
           {{datas.name}}  
         <p v-show="datas.show" > {{datas.speciality}} </p>   
        </li>    
    </ul> 
    <button v-on:click="remove" >  remove  </button>
    </div>
</template>

<script>
export default {

    props:["all"],
    data(){
        return{  
 
        }
    },
    methods:{
        remove:function(){
            
            this.all.pop();

        }
    }
}
</script>

