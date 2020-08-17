<template>
<div>
<h2> hey computed  {{ name}} </h2>

<p> {{a}} </p>
<p> {{b}} </p>
<br>
<p> {{addtoA}} </p>
<p> {{addtoB}} </p> 

<button v-on:click="a++" > add  A  </button> 
<button v-on:click="b++" > add B   </button>

</div>
</template>
<script>
export default {
    data(){
        return{
            name:"yash",
            age:"22",  
            a:0,
            b:0,          
        }
    },
    computed:{
        addtoA:function(){
            console.log('addtoA')
            return this.a+10;
        },

        addtoB:function(){
            console.log('addtoB')
            return  this.b+10
        }
    }

}
</script>
    
