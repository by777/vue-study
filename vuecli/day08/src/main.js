//import Vue from 'vue'
import Vue from 'vue/dist/vue.js'
// import App from './App.vue'
import Login from "./login.vue"
// import tittle from "./login.vue"
//import VueRouter from 'vue-router'

// import account from './account.vue'
// import goodslist from './goodslist.vue'



Vue.config.productionTip = false


// console.log(tittle);

new Vue({
  data:{
    msg:"hello",
  },
  render: h => h(Login),
  router:routes,

}).$mount('#app');

const NotFound = { template: '<p>Page not found</p>' }
const Home = { template: '<p>home page</p>' }
const About = { template: '<p>about page</p>' }
const routes = {
  '/': Home,
  '/about': About,
  'notfount':NotFound
}
//Vue.use(Vuerouter);