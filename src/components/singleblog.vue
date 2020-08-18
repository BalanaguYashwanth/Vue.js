<template>
<div>
<label v-for="(datas,index) in alldata" v-bind:key="index">
    <h2>{{datas.title}}</h2> 
    <p> {{datas.content}} </p>
    <p> {{datas.selectdata}} </p>
    <p> {{datas.content}} </p>  
     <p> {{datas.checkcontent}} </p>      
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
        this.$http.get('https://test-36fdb.firebaseio.com/posts/'+this.id+'.json/',{
        }).then(function(data){
            return data.json()
        }).then(function (data) {
            console.log(data);
            this.alldata.push(data);
            
        })
    }


};

</script>
<style>

label{
    display: inline;
}

</style>
