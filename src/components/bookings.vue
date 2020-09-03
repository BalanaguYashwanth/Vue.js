<template>
  <div class="container">
    <slot></slot>
    <h1 id="title" class="display-4">Bookings</h1>

    <div v-for="(detail,index) in details" v-bind:key="index">
      <div v-if="detail.driver_name == name">
        <div class="card mb-3 mx-auto" style="width: 40em;">
          <div class="card-body">
            <h5 class="card-title">driver name : {{detail.driver_name}}</h5>
            <h5 class="card-title">booked by : {{detail.booked_name}}</h5>
            <h5 class="card-title">booked phonenumber : {{detail.booked_phonenumber}}</h5>
            <h5 class="card-title">Start point : {{detail.startingpoint}}</h5>
            <h5 class="card-title">End point : {{detail.endingpoint}}</h5>
            <h5 class="card-title">Charges per trip : {{detail.charges}}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Tokenservice } from "../storage-token/token";
import axios from "axios";
export default {
  data() {
    return {
      details: "",
      olddata1: "",
      id: "",
      name: "",
    };
  },

  methods: {
    compare: function () {
      console.log("value", this.id);
    },
  },

  created() {
    let axiosconfig = {
      headers: {
        Authorization: "Token " + Tokenservice.getToken(),
      },
    };

    axios
      .get("http://127.0.0.1:8000/opensourceauth/userprofile", axiosconfig)
      .then((Response) => {
        console.log(Response.data);
        let mdata = Response.data;
        for (let obj in mdata) {
          this.name = mdata[obj].username;
        }
      })
      .catch((error) => console.log(error.response.data));

    axios
      .get("http://127.0.0.1:8000/opensourceauth/userbooking")
      .then((res) => {
        console.log(res.data);
        this.details = res.data;
      })
      .catch((err) => console.log(err.response.data));
  },
};
</script>

<style scoped>
#title {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-left: auto;
}

.container {
  text-transform: capitalize;
}
</style>