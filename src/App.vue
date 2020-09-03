<template>
  <div id="app">
   <router-view>

    <div>
     <headers> </headers>
    </div> 
   
    </router-view>

   
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import headers from './components/headers'
export default {
  name: 'App',
  components: {
    //HelloWorld
    headers,

  }
}
</script>

<style >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 
  margin-top: 30px;
  
}
</style>
