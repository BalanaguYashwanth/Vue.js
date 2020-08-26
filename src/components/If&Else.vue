<template>
<div id="list">
<h1> If-Else condition </h1>

<button v-on:click="error=!error" > Toggle error </button>
<button v-on:click="success=!success" > Toggle success </button>

<p v-if="error" > hi there this is error </p>

<p v-else-if ="success" > hi this is success </p>

</div>
</template>

<script>
export default {

    data(){
      return{
          error:false,
          success:false,

      }
    }    
}
</script>

<style lang="stylus" scoped>

</style>

