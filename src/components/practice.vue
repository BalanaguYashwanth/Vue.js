<template>
<div>
<h1 id="app"> {{name}}  pass {{degree}} in {{year}} {{greet()}} </h1>
<p> {{sub}} </p>


<input  v-bind:value="name"  >
<br>
<br>
<button v-on:click="subtract(21)"> subtract the data </button>
</div>
</template>


<script>
export default {
    el:'#app',
    data(){
        return {
            name:"yash",
            year:"2020",
            degree:"b.e",
            sub:0,
            total:0,
        }
    },

    methods:{
       greet:function() {
            return "hello "+ this.name+" world";
        },

        subtract:function(num){
            return this.sub = this.sub-num;

        }
       
    }

}
</script>


<style lang="stylus" scoped>

</style>
