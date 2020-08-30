<template>
  <div>
    <h2 class="display-3" id="title">Covid-19 CheckUp</h2>
    <form>
      <div class="container">
        <div class="form-row">
          <div class="form-group col-md-6">
            <label>Name</label>
            <input type="text" v-model="name" placeholder="enter the name" class="form-control" required/>
          </div>

          <div class="form-group col-md-6">
            <label>Email</label>
            <input type="email" v-model="email" placeholder="enter the email" class="form-control" required/>
          </div>
        </div>

        <div class="form-row">
          <div class="form-group col-md-6">
            <label>Address</label>
            <input
              type="text"
              v-model="address"
              placeholder="enter the address"
              class="form-control"
            />
          </div>

          <div class="form-group col-md-6">
            <label>Landmark</label>
            <input
              type="text"
              v-model="landmark"
              placeholder="enter the near location"
              class="form-control"
            />
          </div>
        </div>

        <div class="form-row">
          <div class="form-group col-md-6">
            <label>Phonenumber</label>
            <input
              type="number"
              v-model="phonenumber"
              placeholder="enter your phone number"
              class="form-control"
            />
          </div>

          <div class="form-group col-md-6">
            <label>Alternate Phonenumber</label>
            <input
              type="number"
              v-model="alternatephonenumber"
              placeholder="enter your phone number"
              class="form-control"
            />
          </div>
        </div>

        <div class="form-group">
          <label>City/Town/Village</label>
          <input type="text" v-model="city" class="form-control" />
        </div>

        <div class="form-group">
          <label>Urgency</label>
          <select placeholder="select the option" v-model="urgency" class="form-control" required >
            <option value="Fewhours">Few hours</option>
            <option value="Fewdays">Few days</option>
            <option value="Fewdays">Few weeks</option>
          </select>
        </div>

        <button v-on:click.prevent="posting" type="submit" class="btn btn-secondary">Submit</button>
       <br>
       <h1> {{this.dummy}} </h1>  
       <br>
       <h1> {{this.mphonenumber}} </h1>
         
      </div>
      
    </form>
  </div>
</template>
  
<script>
import axios from "axios";
export default {
  data() {
    return {
      name: "",
      email: "",
      address: "",
      landmark: "",
      alternatephonenumber: "",
      phonenumber: "",
      city: "",
      urgency: "",
      dummy:"",
      mphonenumber:"",
    };
  },
  methods: {
    posting: function () {
       
      if(this.name!="" && this.email!=""&& this.address!=""&& this.landmark!=""&& this.phonenumber!==""&& this.city!=""&& this.urgency!="")
      {
      axios
        .post("https://test-36fdb.firebaseio.com/posts.json", {
          name: this.name,
          email: this.email,
          address: this.address,
          landmark:this.landmark,
          alternatephonenumber: this.alternatephonenumber,
          phonenumber: this.phonenumber,
          city: this.city,
          urgency: this.urgency,
        })
        .then((Response) => {
        console.log(Response);
        this.$router.push('/message');
        });
       }
       else{
        this.dummy="Please enter valid details and please fillup all inputs";
       }
    },
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