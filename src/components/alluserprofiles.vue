<template>
  <div>
    <div id="btns">
      <button v-on:click="logout" class="btn btn-secondary">logout</button>
    </div>

    <div class="container">
      <h1 id="title" class="display-3">Open Source Bookings</h1>

      <div v-for="(detail,index) in alldetails" v-bind:key="index">
        <div class="card mb-3 mx-auto" style="width: 40em;">
          <img
            class="card-img-top"
            height="400"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT1hqEopKWQ7cBmnAl5cjrFDdTUi_qyOnye2g&usqp=CAU"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">Name:{{detail.username}}</h5>
            <h5 class="card-title">start point:{{detail.start_point}}</h5>
            <h5 class="card-title">end point:{{detail.end_point}}</h5>
            <h5 class="card-title">Service:{{detail.category}}</h5>
            <h5 class="card-title">charge per trip:{{detail.charge_per_trip}} rs</h5>
            <h5 class="card-title">Shift:{{detail.shift}}</h5>
            <h5 class="card-title">Gender:{{detail.gender}}</h5>
            <h5 class="card-title">Ratings:5</h5>
            <a
              v-on:click="posting(detail.id,detail.username)"
              class="btn btn-primary"
            >Book Now {{detail.id}}</a>
          </div>
        </div>
      </div>

      <router-link to="/suggestions">
        <button id="submit" class="btn btn-secondary btn-lg btn-block">Request</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { Tokenservice } from "../storage-token/token";
export default {
  data() {
    return {
      alldetails: "",
      bookedname: "",
      bookedphonenumber: "",
    };
  },

  methods: {
    posting: function (id, name) {
      axios
        .post("http://127.0.0.1:8000/opensourceauth/userbooking", {
          driverid: id,
          driver_name: name,
          booked_name: this.bookedname,
          booked_phonenumber: this.bookedphonenumber,
        })
        .then((res) => console.log(res))
        .catch((err) => console.log(err.response.delete));
      alert("booked");
    },

    logout:function(){

      localStorage.removeItem('user-token')
      this.$router.push("/customerlogin");


    }



  },

  created() {
    axios
      .get("http://127.0.0.1:8000/opensourceauth/allprofiles")
      .then((res) => {
        console.log(res.data);
        this.alldetails = res.data;
      });

    let axiosConfig = {
      headers: {
        Authorization: "Token " + Tokenservice.getToken(),
      },
    };

    axios
      .get("http://127.0.0.1:8000/customerauth/customerprofile", axiosConfig)
      .then((res) => {
        console.log(res.data);
        let cdetails = res.data;
        this.customerdetails = res.data;
        for (let obj1 in cdetails) {
          //console.log(cdetails[obj1].customer_name);
          this.bookedname = cdetails[obj1].customer_name;
          //console.log(cdetails[obj1].customer_phonenumber);
          this.bookedphonenumber = cdetails[obj1].customer_phonenumber;
        }
      })
      .catch((err) => console.log(err));
  },
};
</script>


<style scoped >
#title {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 40px;
  margin-left: auto;
}

#btns {
  float: right;
}

.container {
  text-transform: uppercase;
}
</style>