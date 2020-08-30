<template>
  <div id="title"  class="table-responsive-sm">
    <h2 class="display-3">User Details</h2>
    <table class="table table-bordered" style="table-layout: auto width: 100%;  ">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">Name</th>
          <th scope="col">email</th>
          <th scope="col">address</th>
          <th scope="col">landmark</th>
          <th scope="col">phonenumber</th>
          <th scope="col">alternatephonenumber</th>
          <th scope="col">city</th>
          <th scope="col">urgency</th>
          <th scope="col">operations</th>
        </tr>
      </thead>
      <tbody v-for=" (details,index) in datas" v-bind:key="index">
        <th scope="row">{{index}}</th>
        <td>{{details.name}}</td>
        <td>{{details.email}}</td>
        <td>{{details.address}}</td>
        <td>{{details.landmark}}</td>
        <td>{{details.phonenumber}}</td>
        <td>{{details.alternatephonenumber}}</td>
        <td>{{details.city}}</td>
        <td>{{details.urgency}}</td>
        <td> <button> delete </button> </td>
      </tbody>
    </table>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      body: "",
      datas: [],
    };
  },

  methods: {},

  created() {
    axios
      .get("https://test-36fdb.firebaseio.com/posts.json")
      .then((Response) => {
        this.body = Response;
        var mdata = Response.data;
        console.log(Response.data);
        var blogs = [];
        for (var key in mdata) {
          console.log(mdata[key]);
          mdata[key].id = key;
          blogs.push(mdata[key]);
        }
        this.datas = blogs;
      });
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
}
</style>