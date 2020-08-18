<template>
  <div>
    <input type="text" v-model="search" placeholder="search item" />
    <div v-size="'wide'" v-for="(datas,index) in filterdata" v-bind:key="index">
      <h3 v-rainbow>{{datas.title | maintitle}}</h3>
      <p>{{datas.body | short }}</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: [],
      search: "",
    };
  },
  created() {
    this.$http
      .get("http://jsonplaceholder.typicode.com/posts", {})
      .then(function (data) {
        this.data = data.body.slice(0, 10);
        console.log(this.search);
      });
  },
  computed: {
    filterdata: function () {
      return this.data.filter((blog) => {
        return blog.title.match(this.search);
      });
    },
  },
  directives: {
    rainbow: {
      bind(el) {
        el.style.color = "#" + Math.random().toString().slice(2, 8);
      },
    },
  },

  filters:{
    'maintitle':function(value){
      return value.toUpperCase()
    }
  }



};
</script>
<style lang="stylus" scoped></style>
