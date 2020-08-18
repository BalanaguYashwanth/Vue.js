<template>
  <div>
    <input type="text" v-model="search" placeholder="search item" />
    <div v-size="'wide'" v-for="(datas,index) in filterdata" v-bind:key="index">
    <router-link v-bind:to="'/'+datas.id" > <h3 v-rainbow>{{datas.title | maintitle}}</h3> </router-link>
    <p>{{datas.content  }}</p>
    <p> {{datas.selectdata}} </p>
    <p v-for="(mdatas,index) in datas.checkcontent" v-bind:key="index" > {{mdatas}} </p>
    </div>
  </div>
</template>
<script>
import searchmixins from '../mixins/seachmixins' 
export default {
  data() {
    return {
      data: [],
      search: "",
    };
  },
  created() {
    this.$http
      .get("https://test-36fdb.firebaseio.com/posts.json", {})
      .then(function (data) {
        return data.json()
      }).then(function(data){
           var blogarray=[];
        for(var key in data)
        {
          data[key].id=key;
          blogarray.push(data[key]);
        }
        console.log(blogarray);
        this.data=blogarray;

      })
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
  },
  mixins:[searchmixins]

};
</script>
<style lang="stylus" scoped></style>
