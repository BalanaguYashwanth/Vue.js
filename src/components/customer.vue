<template>
  <div>
    <div class="container">
      <button id="logout" v-on:click="logout">logout</button>
      <h1 class="display-2" id="title">Customer page</h1>

    </div>
  </div>
</template>

<script>
//import axios from "axios";
import swal from "sweetalert2";
window.swal = swal;
export default {

    methods:{
    logout:function(){
        this.$router.push('/customerlogin')
    }
    }


}
</script>

<style scoped>

#logout{
    float: right;
}
#mainbody {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  color: #2c3e50;
  margin-top: 60px;
}

#title {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 130px;
}

label {
  display: block;
}
</style>