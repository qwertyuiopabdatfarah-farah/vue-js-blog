<template>
   <div id="show-blog-template" v-theme:column="'isi-yanglain'">  
     <h1>Detail Blogs Body</h1>
     <input type="text" v-model="search" placeholder="Search Body" />
     <div v-for="blog in filterBlogslain" class="single-blog">
     	<p v-koneng> {{ blog.body | to-lowercase}} </p>
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
 	filterBloged: function(){
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