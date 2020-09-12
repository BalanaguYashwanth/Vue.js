<template>
  <div class="container">
    <h1 class="display-2" id="title">Updates</h1>
    <form>
        
        <div class="form-row" >
          <div  class="form-group col-md-10" > 
          <select class="custom-select" v-model="externalinput">
            <option disabled value>select the user reference id</option>
            <option v-for="(ceach,index) in allindividualdetails()" v-bind:key="index">
              <p>{{ceach.component_name}}</p>
            </option>
          </select>
        </div>
        </div> 


      <div class="form-row">
          
        <div class="form-group">
          <label>
            <div>

              <div
                class="card bg-light mb-3 mx-auto"
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
          </label>
        </div>
{{allindividualdetails()}}

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
     
    };
  },

  methods: {
    alldetails: function () {
      let updatedata = this.$store.state.allcomponent;

      let allupdateddata = updatedata.filter((detail) => {
        let filter = detail.reference_id.split(" ")[1];
        let filtercomponent = detail.component_name;

        if (filter == "(" + this.user() + ")") {
          if (filtercomponent == this.externalinput) {
            return detail;
          }
        }
      });
      return allupdateddata;
    },

    allindividualdetails: function () {
      let allcomponent = this.$store.state.allcomponent;
        let mainarray=[];
        let filterdata=[];
        let flag=0;
        allcomponent.filter((detailed) => {
        let referencename = detailed.reference_id.split(" ")[1];
        if ("(" + this.user() + ")" == referencename) {
          mainarray.push(detailed.component_name)
          for(let i=0;i<mainarray.length;i++)
          {
            for(let j=0 ;j<mainarray.length;j++)
            {
            if( mainarray[i] == mainarray[j])
            {
              flag=flag+1;
            }
            }
            if(flag==1)
            {
              filterdata.push(mainarray[i])  
            }
          }
        }
      });
      console.log(filterdata)
      return mainarray;
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

<style  scoped>
#title {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 100px;
}

.form-row {
  text-transform: capitalize;
}

#mainbody {
  text-align: center;
}
</style>

