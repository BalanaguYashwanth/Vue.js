<template>
  <div class="container">
    <h1 id="title" class="display-2">Bookings</h1>

    <div v-for="(detail,index) in details"  v-bind:key="index" >
      <div class="card mb-3 mx-auto" style="width: 40em;">
        <div class="card-body">
          <h5 class="card-title">driver name : {{detail.driver_name}}</h5>
           <h5 class="card-title">booked by : {{detail.booked_name}}</h5>
           <h5 class="card-title">booked phonenumber : {{detail.booked_phonenumber}}</h5>

        </div>
      </div>
    </div>


  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      details: "",
    };
  },

  created() {
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
  margin-top: 60px;
  margin-left: auto;
}

.container{
    text-transform: capitalize;
}
</style>