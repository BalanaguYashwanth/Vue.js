<template>
    <h1 v-on:click="change" > This is {{title}} </h1>
</template>


<script>

import {bus} from '../main';
export default {
    props:["title"],

    data(){
        return{
           main:true
        }
    },

    methods:{
        change:function(){
            this.title="gorish";
            //this.$emit("change",'bash');
            bus.$emit("doitupdate",'gorish');
        }
    }
}
</script>

<style lang="stylus" scoped>

h1{
    background-color:lightgreen
    padding:20px;
    text-align:center;
}

</style>
