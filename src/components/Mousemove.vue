<template>
    <h1 id="move" @mousemove='mousemove'> 
       <p > ({{x}},{{y}}) </p>
       <a v-on:click.prevent="clicked" href="http://www.boxes.com"> hi how are  </a>
     </h1> 
</template>


<script>
export default {
    
    el:'#move',
    data(){
        return{
            x:0,
            y:0,
        }
    },

    methods:{
        mousemove:function(event){
            this.x=event.offsetX;
            this.y=event.offsetY;
        },

        clicked:function(){
           return  alert('ok');
        }

    }
    
}
</script>

<style>

#move{
    width:600px;
    padding: 230px 10px;
    text-align: center;
    border:1px solid black;

}

</style>

