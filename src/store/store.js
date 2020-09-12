import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
    strict: true,
    state: {
        component: [],
        profile: [],
        componentfilter:[],
        allcomponent:[],
    },

    getters: {
        salecomponent: state => {
            var sale = state.profile.map(detail => {
                return {
                    mainid:detail.id
                }
            })
            return sale
        }
    },

    mutations: {
        assigndata: (state, alldata) => {
            state.component = alldata
        },
        assignprofile: (state, allprofile) => {
            state.profile = allprofile
        },

       filterprofile:(state,allfilterdata)=>{
           state.componentfilter=allfilterdata
           
       },

       assignalldata:(state,allnewdatas)=>{
           state.allcomponent=allnewdatas
       }
    },

    actions: {

        getalldata:function(context){
            axios.get('http://127.0.0.1:8000/api/v5/component/')
            .then(res => {
                //console.log(res)
                context.commit('assignalldata',res.data)
            
            })
            .catch(err => console.log(err.response.data))
        },


        getdata: function (context)  {
            axios.get('http://127.0.0.1:8000/api/v5/componentEach/')
                .then(res => {
                    console.log(res.data)
                    context.commit('assigndata', res.data)
                })
                .catch(err => err.response.data)
        },

        getprofile: function (context) {

            let axiosconfig = {
                headers: {
                    Authorization: "Token " + localStorage.getItem('user-token')
                }
            }
            axios.get('http://127.0.0.1:8000/owner/registerprofile', axiosconfig)
                .then(res => {
                    console.log(res.data);
                    context.commit('assignprofile', res.data);
                })
        },


    }
});


