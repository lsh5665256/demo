import Vue from 'vue'
import Router from 'vue-router'
const home= ()=>import ("../components/home.vue")
const card=()=>import ("../components/card.vue")

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: "/home"
    },
    {
      path:"/home",
      component:home
    },
    {
      path:"/card/:id",
      component:card
    }
  ]
})
