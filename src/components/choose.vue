<template>
  <div id="title" >
      <h1> Choose your domain</h1>
       <br />
    <router-link to="/ownerregister">
      <button type="button"   class="btn btn-primary btn-lg  col-md-6 ">Owner</button>
        <br />
    </router-link>

    <br />
    <router-link to="/customerregister">
      <button type="button" class="btn btn-secondary btn-lg   col-md-6 ">Customer</button>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#title {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 230px;
}
</style>
