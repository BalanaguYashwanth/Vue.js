<template>
<div id="#vue-app">
<div id="bag" v-bind:style="{ transform:'rotate('+-degree+'deg)'}" >
    <img :src="see()" />
</div>
<div id="bag-health">
    <div id="bag-health-div" v-bind:style="{width:health+'%'}">  </div>
</div>
<br>
<div id="controls">
    <button v-on:click="kick" v-show="bool"> kick </button>
    <button v-on:click="restart"> Restart </button>
</div>
</div>      
</template>
<script>
import image from '../assets/bag.png';
import image1 from '../assets/bag-burst.png';
export default {
    data(){
        return{ 
            health:100,
            dimage:"",
            image:image,
            image1:image1,
            degree:0,
            bool:true,
        }
    },
   methods:{
       kick:function(){
            this.health=this.health-10;
            this.degree=this.degree+10;

            if(this.degree>40)
            {
                this.degree=0;
            }
       },
        see:function(){
            if(this.health>0)
            {
                return this.image;
            }else{
                this.degree=0;
                this.bool=false;
                return this.image1;
            }
            
       },
       restart:function(){
            this.health=100;
            this.degree=0;
            this.bool=true;
       }
   },
}
</script>
<style lang="stylus" >
#bag {
    margin-left:510px;
    width:100px;
    height:auto;
    transform:rotate(0deg);
}
#bag-health{
    margin-left: 510px;
    width:200px;
    border:1px solid #000;
}
#bag-health div{ 
    height:20px 
    background:crimson;
}
#controls{
    margin-left:540px;
    }
</style>

