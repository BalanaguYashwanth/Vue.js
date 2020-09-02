<template>
  <div id="mainbody">
    
    <slot> </slot>
    <div>
          <p
            v-for="(detail,index) in details"
            class="display-4 text-center"
            v-bind:key="index"
            id="title"
          >Hey, {{detail.username}}</p>
    </div>


    <form>
      <div class="container">
        <div class="text-center m-3">
          <img
            src="https://info-ted.eu/wp-content/uploads/2019/12/profile-photo.png"
            class="rounded"
            alt="profile pic"
          />
        </div>
        
        <div class="form-row">
          <div class="form-group col-md-6">
            <label>Start point</label>
            <input
              type="text"
              placeholder="enter your startpoint place Ex:cmbt"
              class="form-control"
              v-model="start_point"
              required
            />
          </div>

          <div class="form-group col-md-6">
            <label>End point</label>
            <input
              type="text"
              placeholder="enter your endpoint place Ex:vadapalani "
              class="form-control"
              v-model="end_point"
              required
            />
          </div>
        </div>

        <div class="form-row">
          <div class="form-group col-md-4">
            <label>Present License number</label>
            <input
              type="number"
              placeholder="enter your License number car/bike "
              v-model="license_number"
              class="form-control"
              required
            />
          </div>

          <div class="form-group col-md-4">
            <label>Present Registration number</label>
            <input
              type="number"
              placeholder="enter your registration number car/bike"
              v-model="registration_number"
              required
              class="form-control"
            />
          </div>

          <div class="form-group col-md-4">
            <label>Service Days</label>
            <input
              type="text"
              placeholder="No. of days available for service"
              v-model="service_days"
              required
              class="form-control"
            />
          </div>
        </div>

        <div class="form-row">
          <div class="form-group col-md-3">
            <label>Age</label>
            <input
              type="text"
              placeholder="Enter your age prior eligiblity:18+"
              class="form-control"
              v-model="age"
              required
            />
          </div>

          <div class="form-group col-md-3">
            <label>Shift</label>
            <select class="form-control" v-model="shift" required>
              <option disabled value>Choose the Shift</option>
              <option>Day shift</option>
              <option>Night shift</option>
            </select>
          </div>

          <div class="form-group col-md-3">
            <label>Gender</label>
            <select class="form-control" v-model="gender" required>
              <option disabled value>Choose the Gender</option>
              <option>Men</option>
              <option>Woman</option>
              <option>Prefer not to say</option>
            </select>
          </div>

          <div class="form-group col-md-3">
            <label>Charge per each trip</label>
            <input
              type="text"
              v-model="charge_per_trip"
              placeholder="Enter charge fees in rupees"
              class="form-control"
              required
            />
          </div>
        </div>

        <div class="form-row">
          <div class="form-group col-md-6">
            <label>Select the category</label>
            <select class="form-control" v-model="category" required>
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

          <div class="form-group col-md-6">
            <label>Present Aadhar card number</label>
            <input
              type="number"
              class="form-control"
              placeholder="enter the aadhar number"
              v-model="aadhar_number"
              required
            />
          </div>
        </div>

        <div class="form-group">
          <label>Upload your Image</label>
          <input type="file" class="form-control-file" id="exampleFormControlFile1" />
        </div>

        <div class="form-group">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck" />
            <label class="form-check-label" for="gridCheck">Terms and conditions</label>
          </div>
        </div>

        <button id="submit" v-on:click="posting" class="btn btn-secondary btn-lg btn-block">submit</button>

        {{dummypost}}

        <button
          id="submit"
          type="button"
          v-on:click.prevent="deleting"
          class="btn btn-secondary btn-lg btn-block"
        >Reset</button>
        {{dummydelete}}
        <button
          id="submit"
          type="button"
          v-on:click="logout"
          class="btn btn-secondary btn-lg btn-block"
        >logout</button>
      </div>

          <table class="table table-bordered" style="table-layout: auto width: 100%;  ">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">start_point</th>
              <th scope="col">end_point</th>
              <th scope="col">license_number</th>
              <th scope="col">registration_number</th>
              <th scope="col">service_days</th>
              <th scope="col">Age</th>
              <th scope="col">shift</th>
              <th scope="col">category</th>
              <th scope="col">aadhar_number</th>
              <th scope="col">charge_per_trip</th>
              <th scope="col">Gender</th>
            </tr>
          </thead>
          <tbody v-for=" (details,index) in olddata1" v-bind:key="index">
            <th scope="row">{{mid}}</th>
            <td>{{details.start_point}}</td>
            <td>{{details.end_point}}</td>
            <td>{{details.license_number}}</td>
            <td>{{details.registration_number}}</td>
            <td>{{details.service_days}}</td>
            <td>{{details.age}}</td>
            <td>{{details.shift}}</td>
            <td>{{details.category}}</td>
            <td>{{details.aadhar_number}}</td>
            <td>{{details.charge_per_trip}}</td>
            <td>{{details.gender}}</td>
          </tbody>
        </table>

     
    </form>
  </div>
</template>

<script>
import { bus } from "../main";
import { Tokenservice } from "../storage-token/token";
import axios from "axios";
export default {
  data() {
    return {
      gender: "",
      olddata1: "",
      start_point: "",
      end_point: "",
      license_number: "",
      registration_number: "",
      service_days: "",
      age: "",
      shift: "",
      category: "",
      aadhar_number: "",
      charge_per_trip: "",
      mid: "",
      details: "",
      mownerid: "",
      memail: "",
      dummydelete: "",
      dummypost: "",
      dummytitle: "",
      musername: "",
    };
  },

  methods: {
    deleting: function () {
      let axiosconfig = {
        headers: {
          Authorization: "Token " + Tokenservice.getToken(),
        },
      };

      axios
        .delete(
          "http://127.0.0.1:8000/userprofile_delete/" + this.mid + "/",
          axiosconfig
        )
        .then((res) => {
          console.log(res.data);
          bus.$emit("titlechanged", "vuetitle");
          this.dummydelete = res.data;
          location.reload();
        })
        .catch((err) => console.log(err));
    },

    posting: function () {
      let axiosconfig = {
        headers: {
          Authorization: "Token " + Tokenservice.getToken(),
        },
      };

      axios
        .post(
          "http://127.0.0.1:8000/opensourceauth/userprofile",
          {
            owner_id: this.mownerid,
            start_point: this.start_point,
            end_point: this.end_point,
            license_number: this.license_number,
            registration_number: this.registration_number,
            service_days: this.service_days,
            age: this.age,
            shift: this.shift,
            category: this.category,
            charge_per_trip: this.charge_per_trip,
            aadhar_number: this.aadhar_number,
            username: this.musername,
            gender: this.gender,
          },
          axiosconfig
        )
        .then((res) => {
          console.log(res);
          this.dummypost = res.data;
        })
        .catch((err) => console.log(err));
    },

    logout: function () {
      localStorage.removeItem("user-token");
      this.$router.push("/ownerlogin");
    },
  },

  created() {
    let axiosconfig = {
      headers: {
        Authorization: "Token " + Tokenservice.getToken(),
      },
    };

    axios
      .get("http://127.0.0.1:8000/opensourceauth/userprofile", axiosconfig)
      .then((Response) => {
        //console.log(Response.data);
        let mdata = Response.data;
        for (let obj in mdata) {
          //console.log(mdata[obj].id);
          this.mownerid = mdata[obj].id;
          this.memail = mdata[obj].email;
          this.musername = mdata[obj].username;
        }
        this.details = Response.data;
      })
      .catch((error) => console.log(error.response.data));

    axios
      .get("http://127.0.0.1:8000/opensourceauth/mainuserprofile", axiosconfig)
      .then((dresponse) => {
        let olddata = dresponse.data;
        this.olddata1 = olddata;
        for (let obj1 in olddata) {
          console.log(olddata[obj1].id);
          this.mid = olddata[obj1].id;
        }
        console.log(dresponse.data);
      })
      .catch((err) => console.log(err));
  },
};
</script>

<style >
#title {
  color: #2c3e50;
}

#mainbody {
  text-transform: capitalize;
}

#submit {
  margin-bottom: 30px;
}
</style>