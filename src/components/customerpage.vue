<template>
  <div id="mainbody">
    <div></div>
    <div>
      <p class="display-3 text-center" id="title">Profile page</p>
    </div>
    <form>
      <div class="container">
        <div class="text-center m-3">
          <img
            src="https://info-ted.eu/wp-content/uploads/2019/12/profile-photo.png"
            class="rounded"
            alt="profile pic"
          />
        </div>

        <div class="form-row">
          <div class="form-group col-md-6">
            <label>username</label>
            <p
              type="text"
              placeholder="enter your startpoint place Ex:cmbt"
              class="form-control"
              required
              :value="customer_name"
            >{{customer_name}}  </p>
           
          </div>

          <div class="form-group col-md-6">
            <label>phone number</label>
            <input
              type="number"
              placeholder="enter your 10 digit number"
              class="form-control"
              required
              v-model="customer_phonenumber"
            />
          </div>
        </div>

        <div class="form-row">
          <div class="form-group col-md-6">
            <label>Age</label>
            <input
              type="text"
              placeholder="Enter your age prior eligiblity:18+"
              class="form-control"
              required
              v-model="age"
            />
          </div>

          <div class="form-group col-md-6">
            <label>Gender</label>
            <select class="form-control" v-model="customer_gender" required>
              <option disabled value>Choose the Gender</option>
              <option>Men</option>
              <option>Woman</option>
              <option>Prefer not to say</option>
            </select>
          </div>
        </div>

        <div class="form-group">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck" required />
            <label class="form-check-label" for="gridCheck">Terms and conditions</label>
          </div>
        </div>

        <button id="submit" v-on:click.prevent="posting" class="btn btn-secondary btn-lg btn-block">submit</button>

        <button
          id="submit"
          type="button"
          v-on:click="logout"
          class="btn btn-secondary btn-lg btn-block"
        >logout</button>
      </div>
    </form>
  </div>
</template>

<script>
import { Tokenservice } from "../storage-token/token";
import axios from "axios";
export default {
  data() {
    return {
      customer_name: "",
      customer_gender: "",
      customer_id: "",
      customer_phonenumber: "",
      age: "",
    };
  },

  methods: {
    posting: function () {
      let axiosConfig = {
        headers: {
          Authorization: "Token " + Tokenservice.getToken(),
        },
      };

      axios.post(
        "http://127.0.0.1:8000/customerauth/customerprofile",{
         customer_id:this.customer_id,
         customer_name:this.customer_name,
         customer_gender:this.customer_gender,
         customer_phonenumber:this.customer_phonenumber,
         age:this.age
        },axiosConfig)
        .then(res=>console.log(res))
        .catch(err=>console.log(err.response.data))

    },

    logout: function () {
      localStorage.removeItem("user-token");
      this.$router.push("/customerlogin");
    },
  },

  created() {
    let axiosConfig = {
      headers: {
        Authorization: "Token " + Tokenservice.getToken(),
      },
    };

    axios
      .get(
        "http://127.0.0.1:8000/customerauth/registercustomerdata",
        axiosConfig
      )
      .then((res) => {
        console.log(res.data);
        this.customer_id=res.data.id;
        this.customer_name = res.data.username;
      })
      .catch((err) => console.log(err.response.data));

      axios.get('http://127.0.0.1:8000/customerauth/customerprofile',axiosConfig)
      .then(res=>{
          console.log(res.data)
          
          })
      .catch(err=>console.log(err))


  },
};
</script>

<style scoped >
#title {
  color: #2c3e50;
}

#mainbody {
  text-transform: capitalize;
}

#submit {
  margin-bottom: 30px;
}
</style>