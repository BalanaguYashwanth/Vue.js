<template>
   <div>
   <h1> Hi Reference Topic  </h1>
   <input type="text" ref="input"> 
   <button v-on:click="statusdata"> kickme </button> 
   <br>
   <span> status of input data :{{inputdata}} </span>
   <p ref="test"> "hello world" </p> 
   </div>
</template>


<script>
export default {

    data(){
        return{
            inputdata:"none",
        }
    },

    methods:{
        statusdata:function(){
            console.log(this.$refs.input.value);
            this.inputdata=this.$refs.input.value;
        }
    }
}
</script>
