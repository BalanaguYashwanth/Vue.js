<template>
  <div>
    <div class="container">
      <button id="logout" v-on:click="logout">logout</button>
      <div id="title">
        <slot name="customer">  </slot>
      </div>
      <form  v-if="getaccess()" >
        
        <div class="row justify-content-center align-items-center h-100" >
          hey,{{getprofile()}}

          <div id="row" class="form-group  col-md-7 ">
            <label>Input</label>
            <input type="text"  v-model="referencenum" placeholder="enter your reference number"  class="form-control" />
             {{info}}
            <br>
           <button class="btn btn-secondary" v-on:click.prevent="posting" >  submit </button>
          </div>
        </div>
        
        <div v-for=" (user,index) in userdata " v-bind:key="index"  >

          <div v-if="user.user_name==getprofile()">
              Registered order reference number:
              {{user.reference_number}}
          </div>


        </div>

      </form>
     <form v-else>
         <div id="title" class="container ">
        <h2 class="display-2 "> Thank You For Login </h2>
        <p class="display-4"> We process your request </p>
        <h4 class="display-5"> Wait for activate your account </h4>
      </div>
     </form>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import swal from "sweetalert2";
window.swal = swal;
export default {

       data(){
          return{
              username:'',
              referencenum:'',
              info:'',
              access:'',
              userdata:'',
              userid:'',
          }
      },

  methods: {

    logout: function () {
      this.$router.push("/customerlogin");
    },

    posting:function(){
        axios.post('http://127.0.0.1:8000/api/v5/customerdata/',{
            user_name:this.getprofile(),
            reference_number:this.referencenum,
        }).then( res => {
            console.log(res);
            this.info=res.statusText;
            
            swal.fire("Updated the data", "soon you will get the updates", "success");
            })
        .catch( err => {
            console.log(err.response.data)
            this.info=err.response.data
            })
    },

    getprofile:function(){
        var cdata = this.$store.state.profile
        for( let obj in cdata )
        {
          this.username=cdata[obj].username
          this.userid=cdata[obj].id
        }
        return this.username

    },

    getid:function(){
       var cdata = this.$store.state.profile
        for( let obj in cdata )
        {
          this.userid=cdata[obj].id
        }
        return this.userid
    },

       getaccess:function(){
        var cdata = this.$store.state.profile
        for( let obj in cdata )
        {
            this.access=cdata[obj].is_active;
        }
        return this.access
    },

  },

  created(){
    axios.get('http://127.0.0.1:8000/api/v5/customerdata/')
    .then(res=>{
      this.userdata=res.data
      console.log(res.data)
      })
    .catch(err=>console.log(err))
      this.$store.dispatch('getprofile')
  }





};
</script>

<style scoped>
#logout {
  float: right;
}
#row {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  color: #2c3e50;
  margin-top: 200px;
  text-align: center;
  
}

#title {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 100px;
}

#input{
   text-align: center;
}

label {
  display: block;
}


</style>