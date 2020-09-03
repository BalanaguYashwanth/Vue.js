<template>
  <div>
    <div class="container">
      <p class="display-2" id="title">Request the Service Agents</p>
      <form>

        <div class="form-row">
          <div class="form-group col-md-6">
            <label>Name</label>
            <input
              type="text"
              v-model="name"
              placeholder="enter your  name"
              class="form-control"
              required
            />
          </div>

          <div class="form-group col-md-6">
            <label>phone number</label>
            <input
              type="text"
              v-model="phonenumber"
              placeholder="enter your phonenumber"
              class="form-control"
              required
            />
          </div>
        </div>



        <div class="form-row">
          <div class="form-group col-md-6">
            <label>Start Piont</label>
            <input
              type="text"
              v-model="startpoint"
              placeholder="enter your first name"
              class="form-control"
              required
            />
          </div>

          <div class="form-group col-md-6">
            <label>End Point</label>
            <input
              type="text"
              v-model="endpoint"
              placeholder="enter your last name"
              class="form-control"
              required
            />
          </div>
        </div>

        <div class="form-row">
          <div class="form-group col-md-6">
            <label>Shift</label>
            <select class="form-control" v-model="requestshift" required>
              <option disabled value>Choose the Shift</option>
              <option>Day shift</option>
              <option>Night shift</option>
            </select>
          </div>

          <div class="form-group col-md-6">
            <label>Expected Time/day</label>
            <input
              type="text"
              v-model="expectedtime"
              placeholder="enter time and day to book"
              class="form-control"
              required
            />
          </div>
        </div>

        <div class="form-group">
          <label>Select the category</label>
          <select class="form-control" v-model="requestcategory" required>
            <option disabled value>Choose the category</option>
            <option>Car service</option>
            <option>Bike service</option>
            <option>Courier service</option>
            <option>Store service</option>
            <option>Medical service</option>
            <option>Food service (Beta)</option>
            <option>Repair(Mechanic or Electric) service</option>
          </select>
        </div>
        <button v-on:click.prevent="posted" class="btn btn-secondary">Submit</button>
      </form>
      <h1> {{feedback}} </h1>
      
    </div>
  </div>
</template>


<script >
import axios from 'axios';
export default {

  data(){
    return{
      name:'',
      phonenumber:'',
      startpoint:'',
      endpoint:'',
      expectedtime:'',
      requestshift:'',
      requestcategory:'',
      feedback:"",
    }
  },

methods:{

  posted:function(){
    if(this.name!='' && this.phonenumber!='' && this.startpoint!='' &&  this.endpoint!='' && this.expectedtime!='' && this.requestshift!='' && this.requestcategory!='')
    {

    
    axios.post('http://127.0.0.1:8000/customerauth/customerrequest',{
      name:this.name,
      phonenumber:this.phonenumber,
      startpoint:this.startpoint,
      endpoint:this.endpoint,
      expectedtime:this.expectedtime,
      requestshift:this.requestshift,
      requestcategory:this.requestcategory
    })
    .then(res=>{
      console.log(res)
      this.feedback="Your requested sent to all service agents soon get back to you.....";
      })
    .catch(err=>console.log(err))
    }
    else{
      this.feedback="please fill up all the inputs"

    }
  }
}

};
</script>

<style scoped >
#title {
  margin-top: 150px;
  margin-bottom: 40px;
}
</style>