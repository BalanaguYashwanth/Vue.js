<template>
  <div>
  <router-view> 
    <div slot="owner" >
      <h1 class="display-2">Owner page</h1>
      <router-link to="/component"> post || </router-link>
       <router-link to="/ownerhistory"> history </router-link>
    </div>

    <div slot="customer" >
      <h1 class="display-2">Customer page</h1>
      <router-link to="/customer"> Input || </router-link>
       <router-link to="/updates"> Updates </router-link>
    </div>


  </router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
 
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
