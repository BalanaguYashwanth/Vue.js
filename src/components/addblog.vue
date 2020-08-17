<template>

<div>
<h1> Add Blog </h1> 

<div v-if=!submitted>
<label> Blog title </label>
<input v-model.lazy="blog.title"  > 

<label> Blog content  </label>  
<textarea v-model="blog.content" > </textarea>
</div>

<div id="checkstyle"  v-if=!submitted>
<label> Ram </label>
<input type="checkbox" value="ram"     v-model="blog.checkcontent" >
<label> Ganesh </label>
<input type="checkbox" value="ganesh"  v-model="blog.checkcontent" >
<label> Rom </label>
<input type="checkbox" value="rom"     v-model="blog.checkcontent" >
<label> Fans </label>
<input type="checkbox" value="fans"    v-model="blog.checkcontent" >
<br>
<select v-model="blog.selectdata" >
    <option v-for="datas in authors" v-bind:key="datas"  > {{datas}} </option>
</select>
</div>


<br>
<br>
<button v-on:click="send"> submit </button>
<label v-if=submitted > Thanks for submitting  </label>
<br>
<br>
<label> Preview  </label>
<label> blog title= {{blog.title}} </label>
<label> blog content={{blog.content}} </label>
<label> blog selectdata = {{blog.selectdata}} </label>
<label v-for="check in blog.checkcontent" v-bind:key="check"> blog checkdata =  {{check}} </label>

</div>

</template>

<script>
export default {

    data(){
        return {
            blog:{
            title:'',
            content:"",
            checkcontent:[],
            selectdata:"",
            },
            authors:['net ninja', 'hey man', 'the done','hello rom'],
            submitted:false,
        }
    },

   methods:{
       send:function(){
           this.$http.post('http://jsonplaceholder.typicode.com/posts',{
               title:this.blog.title,
               body:this.blog.content,
               userId:1,
           }).then(function(data){
               console.log(data);
               this.submitted = true;
           });
           
       },
      
   }
   

     
    
}
</script>

<style lang="stylus" scoped>

label{
    display: block;
}
div{    
    margin: 20px auto;
    max-width: 500px;
}

#checkstyle label{
    display: inline;
}

</style>

