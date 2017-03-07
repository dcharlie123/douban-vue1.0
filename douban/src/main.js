import './assets/css/normaliz.css'
import './assets/css/iconfont.css'

import App from './App.vue'
import Vue from 'vue'
import VueRouter from 'vue-router';
import axios from 'axios'
import books from './components/books/books.vue';
import broadcast from './components/broadcast/broadcast.vue';
import group from './components/group/group.vue';
import index from './components/index/index.vue';
import user from './components/user/user.vue'

Vue.prototype.$http = axios
/* eslint-disable no-new */
Vue.use(VueRouter);
let app=Vue.extend(App);//挂载在App
let router=new VueRouter({
  linkActiveClass:'active'
});

router.map({
  '/index':{
    component:index
  },
  '/books':{
    component:books
  },
  '/broadcast':{
    component:broadcast
  },
  '/group':{
    component:group
  },
  '/user':{
    component:user
  }
});
router.redirect({
	'/':'/index'
});
router.start(app,'#app');
