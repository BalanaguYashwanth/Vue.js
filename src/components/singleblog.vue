<template>
<div>
<label v-for="(datas,index) in alldata" v-bind:key="index">
    <h2>{{datas.title}}</h2> 
    <p> {{datas.body}} </p>      
</label>

</div>
</template>
<script>

export default{
    data(){
        return{
            id:this.$route.params.id,
            alldata:[],
        }
    },

    components:{
    

    },

    created(){
        this.$http.get('http://jsonplaceholder.typicode.com/posts/'+this.id,{
        }).then(function(data){
            this.alldata=data;
            console.log(data);
        })
    }


};

</script>
<style>

label{
    display: inline;
}

</style>
