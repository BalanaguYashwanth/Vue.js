<template>
    <div>
    <h1> Welcome to dynamic css </h1>
    <p v-on:click="hi=!hi, app=!app" v-bind:class="greet"> hi man  </p>
    <button v-on:click="hi=!hi">  nearby </button>
    </div>
</template>
<script>

export default {
    data(){
        return{
            name:"yash",
            hi:true,
            app:true,
        }
    },

    computed:{
        greet:function(){
            return{
                hi:this.hi,
                app:this.app
            }
        }
        
    }
}

</script>

<style>
p{
    background : yellow;
}

.hi{
    background :red;
}


.app{
    background :green;
}
</style>
