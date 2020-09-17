<template>
  <div>
    <div class="container">
     
      <div id="title">
               <button id="logout" v-on:click="logout">logout</button>
      <slot name="owner"> </slot>
      </div>
      <form id="mainbody" v-if="callaccess()">
        <div class="form-row d-flex justify-content-center">
          <div class="input-group col-md-6" >

            <select class="custom-select" v-model="selectreference">
              <option disabled value>select the user reference id</option>
              <option v-for="(ceach,index) in allcdetails" v-bind:key="index">
                <p>{{ceach.reference_number}}  ({{ceach.user_name}})  </p> 
              </option>
              
            </select>
          </div>
          <div class="input-group col-md-6">
            <select class="custom-select" v-model="selectcomponent">
              <option disabled value>select the component</option>
              <option v-for="(each,index) in call()" v-bind:key="index">
                <p>{{each.cname}}</p>
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
        <mark>{{info}}</mark>
        </div>
        <button class="btn btn-secondary my-3" v-on:click.prevent="posting">submit</button>
      </form>

      <form v-else>
      
        <div id="title" class="container ">
        <h2 class="display-2 "> Thank You For Login </h2>
        <p class="display-4"> We process your request </p>
        <h4 class="display-5"> Wait for activate your account </h4>
      </div>


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
      access:"",
      allcdetails:'',
      selectreference:'',
      info:'',
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
          cname: text,
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
          reference_id:this.selectreference,
        })
        .then((res) => {
          console.log(res);
          this.info=res.statusText;

          setTimeout(() => {
            location.reload();
            },3000);

        })

        .catch((err) => console.log(err.response.data));
    },

    callprofile: function () {
      var dataprofile = this.$store.state.profile;

      for (var obj in dataprofile) {
        this.mainid = dataprofile[obj].id;
        this.access=dataprofile[obj].is_active;

      }
      return this.mainid;
    },

        callaccess: function () {
      var dataprofile = this.$store.state.profile;

      for (var obj in dataprofile) {

        this.access=dataprofile[obj].is_active;

      }
      return this.access;
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
    axios.get('http://127.0.0.1:8000/api/v5/customerdata/')
    .then(res=>{
      console.log(res.data);
      this.allcdetails=res.data;
      })
    .catch(err=>console.log(err.reponse.data))
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