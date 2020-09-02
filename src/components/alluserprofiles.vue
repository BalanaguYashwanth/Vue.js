<template>
  <div class="container">
    <h1 id="title" class="display-2">Open Source Bookings</h1>

    <div v-for="(detail,index) in alldetails" v-bind:key="index">
      <div class="card mb-3 mx-auto" style="width: 40em;">
        <img
          class="card-img-top"
          height="400"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT1hqEopKWQ7cBmnAl5cjrFDdTUi_qyOnye2g&usqp=CAU"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title"> Name:{{detail.username}}  </h5>
          <h5 class="card-title">start point:{{detail.start_point}}</h5>
          <h5 class="card-title">end point:{{detail.end_point}}</h5>
          <h5 class="card-title">Service:{{detail.category}}</h5>
          <h5 class="card-title">charge per trip:{{detail.charge_per_trip}} rs</h5>
          <h5 class="card-title">Shift:{{detail.shift}}</h5>
          <h5 class="card-title">Gender:{{detail.gender}}</h5>
          <h5 class="card-title">Ratings:5</h5>
          <a  v-on:click="posting"  class="btn btn-primary"> Book Now {{detail.id}} </a>
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
      alldetails: "",

    };
  },


  methods:{

    posting:function(){
     alert('booked');
    }

  },

  created() {
    axios
      .get("http://127.0.0.1:8000/opensourceauth/allprofiles")
      .then((res) => {
        console.log(res.data);
        this.alldetails = res.data;
      });
  },
};
</script>


<style>
#title {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 30px;
}

.container{
   text-transform: uppercase;
}
</style>