<template>
  <div>
    <button v-on:click="logout">logout</button>
    <button v-on:click="retriveToken">retriveToken</button>
    <form v-if="all.verify">
      <p>status: {{all.status.statusText}}</p>enter the name :
      <input
        v-model.lazy="all.mname"
        placeholder="enter the your name"
        v-on:keyup.enter="posting"
      />
      <button v-on:click="posting">submit</button>
      <br />
      <br />
      <!-- <div v-for="(minput,index) in all.input" v-bind:key="index" > 
          enter the new name:  <input v-model="minput.addinput" placeholder="enter the name" /> 
         <button v-on:click="updating(minput.addinput,minput.num)" > submit </button>
      </div>-->
      <div v-for="(datas,index) in all.name" v-bind:key="`A-${index}`">
        <h4>
          name: {{datas.name}}
          <button v-on:click.prevent="deleting(datas.id,datas.name)">delete</button>
          <button v-on:click.prevent="update(datas.id,all.dummy)">update</button>
        </h4>
      </div>
    </form>

    <form v-if="!all.verify">
      <h1>Your requested has sent to admin wait for owner approval</h1>
    </form>
  </div>
</template>
<script>
import axios from "axios";
import swal from "sweetalert2";
import { Tokenservice } from "../storage-token/token";
import { bus } from "../main";
window.swal = swal;
export default {
  props: {
    logindetails: {},
  },
  data() {
    return {
      all: {
        input: [],
        name: "",
        mname: "",
        status: "",
        uinput: "",
        dummy: true,
        verify: false,
      },
      logindata: "",
    };
  },
  methods: {
    
    retriveToken: function () {
      let axiosconfig = {
        headers: {
          Authorization: "Token " + Tokenservice.getToken(),
        },
      };
      axios.get("http://127.0.0.1:8000/todoauth/api_get",axiosconfig)
        .then((response) => console.log(response))
        .catch((error)=>console.log(error));
    },

    logout: function () {
          let axiosconfig = {
        headers: {
          Authorization: "Token " + Tokenservice.getToken(),
        },
      };
      axios.get("http://127.0.0.1:8000/todoauth/logout",axiosconfig).then((response) => {
        localStorage.removeItem("user-token");
        this.redirect();
        console.log(response);
      });
    },
    
    redirect() {
      this.$router.push({ path: "/login" });
    },
    posting: function () {
      bus.$on("username", (data) => {
        this.logindata = data;
        console.log(this.logindata);
        console.log(data);
      });

      let axiosconfig = {
        headers: {
          Authorization: "Token " + Tokenservice.getToken(),
        },
      };
      axios
        .post(
          "http://127.0.0.1:8000/api/v3/todo_api/",
          {
            name: this.all.mname,
          },
          axiosconfig
        )
        .then((response) => (this.all.status = response));
    },

    update: function (num, bool) {
      this.all.input.push({
        num,
        bool,
        addinput: "",
      });
      this.$prompt("Enter new name").then((text) => {
        console.log(text);
        this.updating(text, num);
      });
    },

    updating: function (mname, id) {
      let axiosconfig = {
        headers: {
          Authorization: "Token " + Tokenservice.getToken(),
        },
      };
      axios
        .put(
          "http://127.0.0.1:8000/api/v3/todo_api_one/" + id + "/",
          {
            name: mname,
          },
          axiosconfig
        )
        .then((response) => (this.status = response));
      swal
        .fire("Updated!", "Your name has been updated.", "success")
        .then((response) => location.reload(response));
    },

    deleting: function (id, name) {
      let axiosconfig = {
        headers: {
          Authorization: "Token " + Tokenservice.getToken(),
        },
      };

      axios
        .delete(
          "http://127.0.0.1:8000/api/v3/todo_api_one/" + id + "/",
          axiosconfig
        )
        .then((response) => console.log(response));
      swal
        .fire(
          "Deleted!",
          "successfully " + name + " has been deleted.",
          "success"
        )
        .then((response) => location.reload(response));
    },
  },
  created() {
    let axiosconfig = {
      headers: {
        Authorization: "Token " + Tokenservice.getToken(),
      },
    };
    axios
      .get("http://127.0.0.1:8000/api/v3/todo_api/", axiosconfig)
      .then((response) => {
        this.all.name = response.data;
        this.all.verify = true;
      })
      .catch((error) => {
        console.log(error.response.data);
        console.log("not verified");
      });
  },
};
</script>

<style lang="stylus" scoped></style>

