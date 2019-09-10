import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex)

let store=new Vuex.Store({
    state:{
    count:1,
    shuju:[]
    },
    mutations:{
          gbsj(state,payload){
              console.log(payload)
             state.shuju=payload
          }
    },
    getters:{
      
    },
    actions:{
        qingqiu({commit}){
            axios.get("http://localhost:8080/static/mock/data.json").then(res=>{
                console.log(res)
                commit("gbsj",res.data)
            })
        }
     
    }
})
window.store=store
export default store
