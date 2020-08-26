<template>
  <div>
    <h3>Registration</h3>
    <form action="#">
      <label>
        First Name
        <input
          type="text"
          v-model="first_name"
          placeholder="enter the first name"
          required
        />
      </label>
      <label>
        Last Name
        <input type="text" v-model="last_name" placeholder="enter the last name" required />
      </label>
      <label>
        Email id
        <input type="email" v-model="email" placeholder="enter the email" required />
      </label>
      <label>
        Username
        <input type="text" v-model="username" placeholder="enter the name" required />
      </label>
      <label>
        Passsword
        <input
          type="password"
          v-model="password"
          placeholder="enter the password"
          required
        />
      </label>
      <button v-on:click.prevent="registered">submit</button>
      <router-link to="/login">
        <button>login</button>
      </router-link>
    </form>
    
    <h3  v-for="(infos,index) in info" v-bind:key="index" > {{index}}: {{infos}}</h3>
   <h3> {{minfo}} </h3>

  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      info: "",
      minfo:"",
      first_name: "",
      last_name: "",
      email: "",
      username: "",
      password: "",
    };
  },
  methods: {
    registered: function () {
      axios
        .post("http://127.0.0.1:8000/todoauth/register", {
          first_name: this.first_name,
          last_name: this.last_name,
          email: this.email,
          username: this.username,
          password: this.password,
        })
        .then((response) => {
          this.minfo = response.data.response;
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error.response.data);
          this.info=error.response.data;
        });
    },
  },
};
</script>
<style lang="stylus" scoped>
label {
  display: block;
}
</style>