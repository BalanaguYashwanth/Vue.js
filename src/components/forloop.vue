    <!-- <div>
        <p v-for="message in shoppingItems" v-bind:key="message" > {{message.name}}-{{message.price}}  </p>
    </div> -->

    <!-- <ul>
        <li v-for="(message,index) in messages" v-bind:key="message" > {{index}}.{{message}} </li>
    </ul> -->

    <template> 
    <div>
      <div v-for="message in shoppingItems" v-bind:key="message">   
        <p v-for="(val,key) in message" v-bind:key="(val,key)"> {{key}}-{{val}} </p>
     </div>
    </div> 
    </template>
    
<script>
export default {
    data() {
  return {
    messages:  ['hello', 'vue', 'js'],
    shoppingItems: [
      {name: 'apple', price: '10'},
      {name: 'orange', price: '12'},
      {name: 'yash', price: '20'}
    ]
  }
}
}


</script>

<style lang="stylus" scoped>

</style>