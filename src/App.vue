<template>
<div>

<showblogs />
<listblogs />

</div>
</template>
<script>
import showblogs from './components/showblogs.vue';
import listblogs from './components/listblogs.vue'
export default{
    name:"App",

    components:{
      showblogs,
      listblogs,
      
    },
};
</script>

<style>

</style>
