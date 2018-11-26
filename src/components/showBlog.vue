<template>
   <div id="show-blog-template" v-theme:column="'isi-yanglain'">  
     <h1>All Blogs</h1>
     <input type="text" v-model="search" placeholder="Search Title" />
     <div v-for="blog in filterBlogs" class="single-blog">
      <!-- '/blog/'+ blog.id -->
     	<router-link v-bind:to="{ name: 'detail', params: { id: blog.id }}"><h2 v-rainbow> {{ blog.title | to-uppercase }} </h2></router-link>
     	<p v-koneng> {{ blog.body | dibatasi | to-lowercase}} </p>
     </div>
  </div> 
</template>


<script>
import searchMixin from '../mixins/searchMixin';
export default {
  data:function(){
    return{
       blogs: [],
       search: ''
     
   }
  },
 methods:{

 },
 created(){
   this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data){
   	//console.log(data);
   	this.blogs= data.body.slice(0,10);
   });
 },
 computed: {
 	filterBlogs: function(){
 		return this.blogs.filter((blog) => { 
          return blog.title.match(this.search);
 		});
 	}
 },
//localy
 filters: {
  	'to-lowercase': function(value){
      return value.toLowerCase();
 	}
 },
 //localy
 directives:{
 	'koneng':{
      bind(el, binding, vnode){
      	el.style.color = "#" + Math.random().toString().slice(2,8);
      }
 	}
 },

  mixins: [searchMixin] 
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#show-blog-template{
  max-width: 800px;
  margin: 0 auto;	
}
.single-blog{
	padding: 20px;
	margin: 20px 0;
	box-sizing: border-box;
	background: #eee;
}
</style>