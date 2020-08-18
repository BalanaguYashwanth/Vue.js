<template>
<div>
<headers />
<router-view> </router-view>

</div>
</template>
<script>
// import showblogs from './components/showblogs.vue';
// import listblogs from './components/listblogs.vue'
import headers from './components/headers.vue'
export default{
    name:"App",

    components:{
      // showblogs,
      // listblogs,
      headers,
    },
};

</script>

<style>

</style>
