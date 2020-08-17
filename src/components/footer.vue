<template>
  <div>
    <h1>This is {{title}}</h1>
    <p>.</p>
  </div>
</template>
<script>
import {bus} from '../main';
export default {
    props:{
        title:{
            type:String
        }
    },
    
    created(){
        bus.$on("doitupdate",(data)=>{
                this.title=data;
            })

        },
}
</script>

<style lang="stylus" scoped>
h1 {
  background-color: rgb(66, 66, 66);
  color: lightgreen;
  text-align: center;
  padding: 20px;
  margin: 0px;
}

p {
  background-color: red;
}
</style>
