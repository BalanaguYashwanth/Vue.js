<template>
  <div>
    <div class="container">
      <button id="logout" v-on:click="logout">logout</button>
      <h1 class="display-2" id="title">Owner page</h1>
      <form id="mainbody">
        <div class="form-row d-flex justify-content-center">
          <div class="input-group col-md-6">
            <select class="custom-select" v-model="selectcomponent">
              <option disabled value>select the component</option>
              <option v-for="(each,index) in call()" v-bind:key="index">
                <p>{{each.name}}</p>
              </option>
            </select>

            <div class="input-group-append">
              <button v-on:click="push" class="btn btn-outline-secondary" type="button">+</button>
            </div>
          </div>
        </div>

        <div class="form-groups my-4">
          <label>
            title
            <input
              v-model="title"
              type="text"
              class="form-control"
              placeholder="enter the title"
            />
          </label>
        </div>
        <div class="form-groups">
          <label>
            description
            <textarea
              v-model="description"
              rows="5"
              type="text"
              class="form-control"
              placeholder="enter the description"
            />
          </label>
        </div>

        <button class="btn btn-secondary my-3" v-on:click="posting">submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import swal from "sweetalert2";
window.swal = swal;
export default {
  data() {
    return {
      cdetails: "",
      icomponent: "",
      selectcomponent: "",
      all: "",
      title: "",
      description: "",
      mainid: "",
      mainfilter: "",
    };
  },

  methods: {
    logout: function () {
      localStorage.removeItem("user-token");
      this.$router.push("/ownerlogin");
    },

    push: function () {
      this.$prompt("Enter new component").then((text) => {
        console.log(text);
        this.push2(text);
      });
    },

    push2: function (text) {
      axios
        .post("http://127.0.0.1:8000/api/v5/componentEach/", {
          user_id: this.callprofile(),
          name: text,
        })
        .then((res) => {
          console.log(res);
          this.$store.dispatch("getdata");
          swal.fire("Created", "successfully created new component", "success");
        })
        .catch((err) => console.log(err));
    },

    posting: function () {
      axios
        .post("http://127.0.0.1:8000/api/v5/component/", {
          user: this.callprofile(),
          component_name: this.selectcomponent,
          title: this.title,
          description: this.description,
        })
        .then((res) => {
          console.log(res);
        })

        .catch((err) => console.log(err.response.data));
    },

    callprofile: function () {
      var dataprofile = this.$store.state.profile;

      for (var obj in dataprofile) {
        this.mainid = dataprofile[obj].id;
      }
      return this.mainid;
    },

    call: function () {
      var datafilter = this.$store.state.component;

      var alldata = datafilter.filter((detail) => {
        if (this.callprofile() == detail.user_id) {
          return detail;
        }
      });

      return alldata;
    },
  },

  created() {
    return this.$store.dispatch("getdata");
  },

  mounted() {
    return this.$store.dispatch("getprofile");
  },
};
</script>

<style scoped>
.container {
  text-transform: capitalize;
}

#logout {
  float: right;
}

textarea {
  height: auto;
}

#mainbody {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  color: #2c3e50;
  margin-top: 60px;
}

#title {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 130px;
}

label {
  display: block;
}
</style>