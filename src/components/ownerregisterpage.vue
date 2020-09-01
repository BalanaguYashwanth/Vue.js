<template>
  <div>
    <div class="container">
      <p class="display-1" id="title">Owner Registration</p>
      <form>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label>First Name</label>
            <input type="text" v-model="first_name" placeholder="enter your first name" class="form-control" required />
          </div>

          <div class="form-group col-md-6">
            <label>Last Name</label>
            <input type="text"  v-model="last_name" placeholder="enter your last name" class="form-control" required />
          </div>
        </div>

        <div class="form-row">
          <div class="form-group col-md-6">
            <label>Username</label>
            <input type="text" v-model="username" placeholder="enter your username" class="form-control"  required/>
          </div>

          <div class="form-group col-md-6">
            <label>Password</label>
            <input type="password"  v-model="password" placeholder="enter your password" class="form-control" required />
          </div>
        </div>

        <div class="form-group">
          <label>Email</label>
          <input type="email"  v-model="email" placeholder="enter your email" class="form-control" required />
        </div>

        <button v-on:click.prevent="register" class="btn btn-secondary">Submit</button>
        
      </form>
      {{incorrect}}
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {

  data(){
    return{
      first_name:"",
      last_name:"",
      username:"",
      password:"",
      email:"",
      incorrect:"",
    }
  },


  methods:{
    register:function(){
      if(this.first_name!="" &&  this.last_name!="" && this.username!="" && this.password!="" && this.email!="")
      {
      axios.post('http://127.0.0.1:8000/opensourceauth/register',{
        first_name:this.first_name,
        last_name:this.last_name,
        username:this.username,
        password:this.password,
        email:this.email,
      })
      .then(response=>{
        console.log(response);
        this.$router.push('/ownerlogin');
         }
      )
      .catch(error=>{
        console.log(error);
        this.incorrect=error.response.data;
      })
      }
      else{
        this.incorrect="please fill all the blanks"
      }
    }
  }

 

};
</script>

<style scoped >
#title {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 160px;
}
</style>