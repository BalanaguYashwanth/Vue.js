<template>

<div>
<h1> this is another </h1>
<input  v-model="name" >
<br>
<input  v-model="age" >

<span> {{name}} </span>
<br>
<span> {{age}} </span>
</div>


</template>
<script>
export default{

    data(){
        return {
            name:"",
            age:"",
        }
    },
}

</script>

<style>
    
</style>