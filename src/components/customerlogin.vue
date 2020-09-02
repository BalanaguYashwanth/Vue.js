<template>
  <div id="title" class="container">
    <h2 class="display-2">Customer LogIn</h2>
    <div>
      <div class="form-group">
        <input type="text" v-model="username" placeholder="enter the username" class="form-control"  />
      </div>

      <div class="form-group">
        <input
          type="password"
          v-model="password"
          placeholder="enter the password"
          class="form-control"
        />
      </div>
      <button v-on:click.prevent="posting" class="btn btn-secondary">submit</button>
    </div>
    {{incorrect1}}
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      username: "",
      password: "",
      incorrect1:"",
    };
  },

  methods:{
      posting:function() {
          if(this.email!="" && this.password!="")
          {

          axios.post('http://127.0.0.1:8000/customerauth/customerlogin',{
              username:this.username,
              password:this.password,
          })
          .then(Response=>{
              console.log(Response.data.token);
              localStorage.setItem('user-token',Response.data.token);
              this.$router.push('/customerpage')
          })
          .catch(error=>{
              console.log(error);
              this.incorrect1=error.response.data;
          })
          }
          else{
              this.incorrect1="please fillup all blanks";
          }
      }
  }

};

</script>

<style scoped>
#title {
  text-align: center;
  margin-top: 170px;
}
</style>