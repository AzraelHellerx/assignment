import { createApp } from 'vue'
import App from './App.vue'
// 引入路由
import router from './router'
import Embed from 'v-video-embed'
// Vue.use(Embed);


import './assets/css/bootstrap-4.4.1.css'
import './assets/css/x3dom.css'
import './assets/css/all.css'
import './assets/css/custom.css'

// 使用路由
const vue = createApp(App)
  .use(router,Embed)


vue.mount('#app')
console.log(import.meta.env);
