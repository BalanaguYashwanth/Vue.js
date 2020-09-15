<template>
  <div class="container">
    <button id="logout" v-on:click="logout">logout</button>
    <h1 class="display-2" id="title">Updates</h1>
    <form>
      <div class="form-row">
        <div
          class="shadow p-3 mb-3 bg-white rounded col-md-6"
          v-for="(ceach,index) in allindividualprojects()"
          v-bind:key="index"
        >
          <div class="card-deck">
            <div class="card border-0" v-on:click="inputid=ceach">
              <div class="card-body">
                <p>order id:-</p>
                <h5 class="card-title display-4">{{ceach}}</h5>
              </div>
            </div>
          </div>

          <div v-if="inputid == ceach ">
            <button class="btn btn-secondary" style="float:right" type="button" disabled>
              <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
              Loading...
            </button>
          </div>
        </div>
      </div>

      <div class="form-row">
        <div class="form-group col-md-6 mx-auto">
          <select class="custom-select" v-model="inputid">
            <option disabled value>Choose the id</option>
            <option v-for="(ceach,index) in allindividualprojects()" v-bind:key="index">
              <p>{{ceach}}</p>
            </option>
          </select>
        </div>

        <div class="form-group col-md-6 mx-auto">
          <select class="custom-select" v-model="externalinput">
            <option disabled value>Choose the product</option>
            <option v-for="(ceach,index) in allindividualdetails()" v-bind:key="index">
              <p>{{ceach}}</p>
            </option>
          </select>
        </div>
      </div>

      <div>
        <div
          class="card bg-light my-3"
          v-for=" (detailed,index) in alldetails()"
          v-bind:key="index"
        >
          <div class="card-body">
            <h5 class="card-title">title:{{detailed.title}}</h5>
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
    </form>
    
  </div>
</template>
<script>
export default {

  

  data() {
    return {
      username: "",
      reference: "",
      externalinput: "",
      allcomponentdetails: "",
      inputid: "",
    };
  },


  methods: {
    logout: function () {
      this.$router.push("/customerlogin");
    },

    alldetails: function () {
      let updatedata = this.$store.state.allcomponent;

      let allupdateddata = updatedata.filter((detail) => {
        let filter = detail.reference_id.split(" ")[1];
        let filterid = detail.reference_id.split(" ")[0];
        let filtercomponent = detail.component_name;
        if (filter == "(" + this.user() + ")") {
          if (filterid == this.inputid) {
            if (filtercomponent == this.externalinput) {
              return detail;
            }
          }
        }
      });
      return allupdateddata;
    },

    allindividualprojects: function () {
      let alldata = this.$store.state.allcomponent;
      let allid = [];
      alldata.filter((detail) => {
        let filtered = detail.reference_id.split(" ")[1];

        if ("(" + this.user() + ")" == filtered) {
          allid.push(detail.reference_id.split(" ")[0]);
        }
      });

      let newid = Array.from(new Set(allid));

      return newid;
    },

    allindividualdetails: function () {
      let allcomponent = this.$store.state.allcomponent;
      let mainarray = [];
      let uniquearray=[];
      
      allcomponent.filter((detailed) => {
        let referencename = detailed.reference_id.split(" ")[1];
        let referenceid = detailed.reference_id.split(" ")[0];
        if ("(" + this.user() + ")" == referencename) {
          if (referenceid == this.inputid) {
            mainarray.push(detailed.component_name);
          }
        }
      });
       let myset=new Set(mainarray)
      
      var uniquedata = Array.from(new Set(mainarray));
      uniquearray=[...myset]
      console.log(uniquearray)
      localStorage.setItem('uniquedata',uniquearray)
     
     
      return uniquedata;

    },

    user: function () {
      let userdetails = this.$store.state.profile;
      for (let obj in userdetails) {
        this.username = userdetails[obj].username;
      }
      return this.username;
    },
  },

  created() {
    return this.$store.dispatch("getalldata");
  },
  mounted() {
    return this.$store.dispatch("getprofile");
  },
};
</script>

<style  >
#title {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 100px;
  margin-bottom: 30px;
}

.form-row {
  text-transform: capitalize;
}

#mainbody {
  text-align: center;
}

#logout {
  float: right;
}
</style>

