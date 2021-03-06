import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
import '@/assets/css/reset.css'
import '@/assets/js/rem.js'
import '@/mock/mock.js';

//按需求引入 
import { NavBar, Icon, Tabbar, TabbarItem,Swipe, SwipeItem,Lazyload,PullRefresh,SubmitBar,Card } from 'vant';
Vue.use(NavBar).use(Icon).use(Tabbar).use(TabbarItem).use(Swipe).use(SwipeItem).use(Lazyload).use(PullRefresh).use(SubmitBar).use(Card);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
