import showBlog from './components/showBlog.vue'
import addBlog from './components/addBlog.vue'
import singleBlog from './components/singleBlog.vue'


export default [
  { path: '/', 		   name: 'data',   component:showBlog, alias: '/home'},
  { path: '/add', 	   name: 'add',    component:addBlog},
  { path: '/blog/:id', name: 'detail', component:singleBlog},
  { path: '*',         redirect: '/' },
]
