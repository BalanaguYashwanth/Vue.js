<template>
<div>
  <!-- <todo/> -->
  <!-- <Mousemove/> -->
  <!-- <inputinterrupt /> -->
  <!-- <practice1 /> -->
  <!-- <dynamiccss /> -->
  <!-- <reference /> -->
  <kickbag />
  <!-- <appheader  v-bind:title="title"  v-on:change="updatechange($event)" />
  <mpage v-bind:all="all"> -->
  
<!-- 
  <div slot="form">  
  User:<input type="text" >
  <br>
  Password :<input type="password" >
  <br>
  <button> submit </button>
  <br>
  <br>
 </div>
     
  </mpage>lot ="title"
  <appfooter v-bind:title="title" /> -->
  
 </div> 
</template>
<script>
//import todo from './components/Basics';
//import Mousemove from './components/Mousemove';
//import inputinterrupt from './components/Input-Interept';
//import practice from './components/practice';
import kickbag from './components/kickbag';
//import reference from './components/reference';
// import appheader from './components/header';
// import appfooter from './components/footer'
// import mpage from './components/mpage'
export default{
    name:"App",
    data(){
      return {
         all:[  
            {name: 'Ryu', speciality: 'Vue Components', show: false},
            {name: 'Crystal', speciality: 'HTML Wizardry', show: false},
            {name: 'Hitoshi', speciality: 'Click Events', show: false},
            {name: 'Tango', speciality: 'Conditionals', show: false},
            {name: 'Kami', speciality: 'Webpack', show: false},
            {name: 'Yoshi', speciality: 'Data Diggin', show: false}
        ],
        title:"Vue yash",

       
      }
    },

     methods:{
          updatechange:function(updateddata){
            this.title=updateddata;
          }
        },

    components:{
      //todo,
      //Mousemove,
      //inputinterrupt,
      //practice,
      //practice1,
      //dynamiccss,
      kickbag,
      //reference,
      // appheader,
      // appfooter,
      // mpage,
    },
};
</script>

<style>

</style>
