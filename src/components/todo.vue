<template>
  <div>
    <p>status: {{all.status.statusText}}</p>
    enter the name :
    <input v-model.lazy="all.mname" placeholder="enter the your name" v-on:keyup.enter="posting"  />
    <button v-on:click="posting"> submit </button>
    <br>
    <br>        
         <!-- <div v-for="(minput,index) in all.input" v-bind:key="index" > 
            <input v-model="minput.addinput" placeholder="enter the name" /> 
         </div> -->


             <p> {{all.input}} </p>

    <h3 v-for="(datas,index) in all.name" v-bind:key="index">
          name: {{datas.name}} 
         <button v-on:click="deleting(datas.id,datas.name)"  > delete </button>
         <button v-on:click="update(index)" > update  </button>
     </h3>

        


  </div>
</template>
<script>
import axios from 'axios';
export default {
    data(){
        return{
            all:{
                input:[],
                name:'',
                mname:'',
                status:'',
                uinput:'',
                dummy:true,
            },          
        }
    },
    methods:{  
        posting:function(){
            console.log("done");
            axios.post('http://127.0.0.1:8000/api/v3/todo_api/',{
                name:this.all.mname
            }).then(response => this.all.status=(response));
        },

        update:function(index){
            this.all.input.push(
                {
                    index,
                    addinput:''
                });
        },

        updating:function(id,mname){
          axios.put('http://127.0.0.1:8000/api/v3/todo_api_one/'+id+'/',{
              name:mname
          }).then( response => this.status=(response))
          alert(id,mname);
        },

        deleting:function(id,name){

            axios.delete('http://127.0.0.1:8000/api/v3/todo_api_one/'+id+'/')
            .then( response => console.log(response));
            alert("successfully "+name+" was deleted");
        },
    },
    created(){
        axios.get('http://127.0.0.1:8000/api/v3/todo_api/').then( response => this.all.name=(response.data))
        
    }
}
</script>

<style lang="stylus" scoped></style>
