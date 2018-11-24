import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.config.productionTip = false

//global custom directives
Vue.directive('rainbow', {
	bind(el, binding, vnode){
       el.style.color = "#" + Math.random().toString().slice(2,8);
	}
});

//global custom directives
Vue.directive('theme', {
	bind(el, binding, vnode){
      if(binding.value == 'isi'){
      	el.style.maxWidth =  "1200px";
      }else if(binding.value == 'isi-yanglain'){
      	el.style.maxWidth =  "900px";
      }

      if(binding.arg == 'column'){
      	el.style.background = '#ddd';
      	el.style.padding = '20px';
      }
	}
});

//global custom filters
Vue.filter('to-uppercase', function(value){
  return value.toUpperCase();
});

Vue.filter('dibatasi', function(value){
  return value.slice(0, 100) + '...';
});


const router = new VueRouter({
  routes: Routes,
  mode: 'history',
});


new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')
