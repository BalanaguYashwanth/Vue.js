<template>
  <div id="title" class="container">
    <h2 class="display-2">SignUp</h2>
    <div>
      <div class="form-group">
        <input type="email" v-model="email" placeholder="enter the email" class="form-control" />
      </div>

      <div class="form-group">
        <input
          type="password"
          v-model="password"
          placeholder="enter the password"
          class="form-control"
        />
      </div>
      <button v-on:click="posting" class="btn btn-secondary">submit</button>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods:{
      posting:function(){
          let self=this
          firebase.auth().createUserWithEmailAndPassword(this.email,this.password)
          .then(
              function(){
                  alert('your account has been creeated successfully');
                  self.$router.push('/signin');
              },
              function(err){
                  alert(err.message);
              }
          )
      }
  }
};
</script>

<style scoped>
#title {
  text-align: center;
  margin-top: 200px;
}
</style>