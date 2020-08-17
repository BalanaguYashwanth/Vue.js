<template>
<div>
<h1 id="app"> 
     hi {{device}} 
     <br>
     {{greet()}}     
     <br>
     <input v-bind:value="friend">
     <br>
     <a v-bind:href="url"> bootstrap </a>
     <p v-html='all'>  </p>

     <p> {{age}} </p>

     <button v-on:click="add(1)"> Next Year</button>
     
     <button @click="sub(1)"> Previous Year </button>

     <button v-on:dblclick="add(10)"> Next Year</button>
     
     <button @click="sub(10)"> Previous Year </button>
</h1>

</div>
</template>
<script>
export default {
     el:'#app',
     data(){
          return{
               x:0,
               y:0,
               age:21,
               device:"nokia",
               person:'yash',
               friend:'siva yashwanth',
               url:'www.win.com',
               all:'<a href="person">person</a>',
          }
     },
     
     methods:{
          greet:function(){
               return 'Energy'+this.device;
          },
          add:function(event){
               this.age=this.age+event;
               
          },
          sub:function(event){
               this.age=this.age-event;
          },
     }
    
}

</script>
<style>
</style>