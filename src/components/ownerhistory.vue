<template>
  <div class="container">
    <div id="title">
             <button id="logout" v-on:click="logout">logout</button>

      <slot name="owner" > </slot>
    </div>
    <form>
      <div  v-for=" (detailed,index) in getalldata"
          
          v-bind:key="index">

        <div
          class="card bg-light my-3"
         v-if="detailed.user == getuserid"
        >
        <div  >
          <div  class="card-body" >
            <h5 class="card-title">title:{{detailed.title}}</h5>
             <p class="card-text">user: {{detailed.reference_id}}</p>
            <p class="card-text">description: {{detailed.description}}</p>
          </div>
          <div class="card-footer" id="mainbody">
            <small class="text-muted">
              Last updated {{detailed.timestamp}} ago
              <br />
              {{detailed.component_name}}
            </small>
          </div>
        </div>
        </div>

      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      getalldata: "",
      getid: "",
    };
  },

  computed: {
    getuserid: function () {
      let mainuser = this.$store.state.profile;
      mainuser.forEach((detail) => {
        this.getid = detail.id;
      });

      return this.getid;
    },
  },

  methods:{
    logout: function () {
      localStorage.removeItem("user-token");
      this.$router.push("/ownerlogin");
    },


  },

  created() {
    axios
      .get("http://127.0.0.1:8000/api/v5/component/")
      .then((response) => {
        this.getalldata = response.data;
        console.log(response.data);
      })
      .catch((error) => console.log(error));

    return this.$store.dispatch("getprofile");
  },
};
</script>

<style scoped>
#title {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 130px;
}
#logout {
  float: right;
}

.container {
  text-transform: capitalize;
}
</style>