<template>
  <div>
    <div class="container">
      <form>
        <div class="card mx-auto" style="width: 50rem">
          <div class="card-body">
            <textarea
              style="border: none"
              rows="3"
              type="text"
              class="form-control"
              placeholder=" ✍️ write a post "
              required
              v-model="textdata"
            >
            </textarea>
          </div>
          <div class="card-footer text-muted">
            <input
              type="file"
              placeholder="Upload a photo"
              title="Choose a video please"
              @change="onfileselect"
            />
          
          </div>
           <p v-show="info" style="text-align:center" > {{info}} </p>
          <button
            type="button"
            v-on:click="posting"
            class="btn btn-secondary m-1"
          >
            Submit
          </button>
         
          
        </div>

        <div v-for="(all, index) in alldata" v-bind:key="index">
          <div class="card mx-auto m-5" style="width: 35rem">
            <img :src="all.img" class="card-img-top" alt="nature" />
            <div class="card-body">
              <p class="card-text">
                {{ all.text }}
              </p>
              <button
                type="button"
                v-on:click="deleting(all.id)"
                class="btn btn-secondary"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      alldata: "",
      textdata: "",
      image: "",
      selectfile: "",
      info:'',
    };
  },

  methods: {
    onfileselect: function (event) {
      this.selectfile = event.target.files[0];
    },

    posting: function () {
      var fd = new FormData();
      fd.append("text", this.textdata);
      fd.append("img", this.selectfile);

      axios({
        method: "post",
        url: "http://127.0.0.1:8000/api/v3/pgowner/",
        data: fd,
        headers: {
          "content-type": `multipart/form-data; boundary=${fd._boundary}`,
        },
      })
        .then((res) => {
          console.log(res);
          this.info = res.statusText;
        })
        .catch((err) => {
          console.log(err.response.data)
          this.info=err.response.data
          });
    },

    deleting: function (id) {
      alert("deleting the post");
      axios
        .delete("http://127.0.0.1:8000/api/v3/pgowner/" + id)
        .then((res) => {
          console.log(res);
          location.reload();
        })
        .catch((err) => console.log(err.response.delete));
    },
  },

  created() {
    axios
      .get("http://127.0.0.1:8000/api/v3/pgowner/")
      .then((res) => {
        console.log(res);
        this.alldata = res.data;
      })
      .catch((err) => console.log(err.response.data));
  },
};
</script>


<style>
textarea {
  height: auto;
}
</style>

