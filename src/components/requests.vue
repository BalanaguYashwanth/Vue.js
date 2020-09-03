<template>
  <div class="container">

    <slot> </slot>
    <h1 id="title" class="display-4"> Customer Requests </h1>

    

    <div v-for="(detail,index) in details"  v-bind:key="index" >
      <div class="card mb-3 mx-auto" style="width: 40em;">
        <div class="card-body">
          <h5 class="card-title">Customer name : {{detail.name}}</h5>
           <h5 class="card-title">phonenumber : {{detail.phonenumber}}</h5>
           <h5 class="card-title">startpoint : {{detail.startpoint}}</h5>
           <h5 class="card-title">endpoint : {{detail.endpoint}}</h5>
           <h5 class="card-title">expectedtime : {{detail.expectedtime}}</h5>
           <h5 class="card-title">requestshift : {{detail.requestshift}}</h5>
           <h5 class="card-title">requestcategory : {{detail.requestcategory}}</h5>
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
      .get("http://127.0.0.1:8000/customerauth/customerrequest")
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

.container{
    text-transform: capitalize;
}
</style>