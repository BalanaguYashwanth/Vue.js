<template>
<div>
<h1> hi headers </h1>
<label>
<router-link to="/"  > Home </router-link>
</label>
<label>
    <router-link to="/add"  > add </router-link>
</label>
</div>
</template>
<script>

export default{
    components:{
    },
};

</script>

<style>

label{
    display: inline;
}

</style>
