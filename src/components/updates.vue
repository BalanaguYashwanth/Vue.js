<template>
    <div class="container">
         <h1 class="display-2" id="title"> Updates </h1>
        <form>
            <div class="form-row" >
                <div class="form-group" >
                    <label>

                        {{alldetails()}}

                        <br>
                        ({{user()}})

                    </label>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
export default {

    data(){
        return{
            username:'',
            reference:'',


        };

    },
    
    methods:{

        alldetails:function(){

           let updatedata = this.$store.state.allcomponent

          let allupdateddata=  updatedata.filter( detail=>
           {
               let filter = (detail.reference_id.split(" ")[1]);
              
               if(filter == "("+this.user()+")" )
               {
                   return detail
               }
            });

           return allupdateddata
           },
        
        user:function(){
            
            let userdetails = this.$store.state.profile

            for(let obj in userdetails)
            {
                this.username =userdetails[obj].username
            }
            return this.username
        }
        
        },

    created(){
        return this.$store.dispatch('getalldata')
    },
    mounted(){

        return this.$store.dispatch('getprofile')
    }
    
}
</script>

<style  scoped>
#title {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 100px;
}
</style>

