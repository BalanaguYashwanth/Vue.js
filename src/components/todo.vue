<template>
  <div>
    <form>
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
  </div>
</template>
<script>
import axios from "axios";
import swal from 'sweetalert2';

window.swal = swal
export default {
  data() {
    return {
      all: {
        input: [],
        name: "",
        mname: "",
        status: "",
        uinput: "",
        dummy: true,
      },
    };
  },
  methods: {
    posting: function () {
      console.log("done");
      axios
        .post("http://127.0.0.1:8000/api/v3/todo_api/", {
          name: this.all.mname,
        })
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
      axios
        .put(
          "http://127.0.0.1:8000/api/v3/todo_api_one/" + id + "/",
          {
            name: mname,
          },
          {
            "Content-Type": "application/json",
          }
        )
        .then((response) => (this.status = response));
        swal.fire("Updated!", "Your name has been updated.", "success");
    
      location.reload();
    
   
    },

    deleting: function (id, name) {
      axios
        .delete("http://127.0.0.1:8000/api/v3/todo_api_one/" + id + "/")
        .then((response) => console.log(response));
        swal.fire("Deleted!", "successfully "+name+" has been deleted.", "success").then(
            response => location.reload(response) 
        );
    },
  },
  created() {
    axios
      .get("http://127.0.0.1:8000/api/v3/todo_api/")
      .then((response) => (this.all.name = response.data));
  },
};
</script>

<style lang="stylus" scoped></style>

