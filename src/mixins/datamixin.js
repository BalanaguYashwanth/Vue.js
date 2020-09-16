export default {
   
    computed: {
        allindividualdetails: function () {
            let allcomponent = this.$store.state.allcomponent;
            let mainarray = [];
            let uniquearray = [];

            allcomponent.filter((detailed) => {
                let referencename = detailed.reference_id.split(" ")[1];
                let referenceid = detailed.reference_id.split(" ")[0];
                if ("(" + this.user() + ")" == referencename) {
                    if (referenceid == this.inputid) {
                        mainarray.push(detailed.component_name);
                        this.caccess=false
                    }
                }
            });
            let myset = new Set(mainarray)

           
                var uniquedata = Array.from(new Set(mainarray));
                uniquearray = [...myset]
    
          
            console.log(uniquearray)
            this.$store.dispatch('getinputcomponents',uniquearray)
            
            return uniquedata;
     
        },
    }
}
