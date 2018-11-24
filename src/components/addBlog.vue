<template>
  <div id="add-style">  
    <div v-if="submitted">
       <h3>Saved Successfully</h3>
       </div> 
    <h2>Add New Blog Post</h2> 
    <form v-if="!submitted">
      <label>Blog Title:</label>
      <input type="text" v-model="blog.title" placeholder="Blog Title">
      <label>Blog Content:</label>
      <textarea v-model.lazy="blog.content"></textarea>
      <div id="checkboxes-style">
      	<label>Erwin</label>
      	<input type="checkbox" value="erwin" v-model="blog.categories" />
      	<label>Farah</label>
      	<input type="checkbox" value="farah" v-model="blog.categories" />
      	<label>Mia</label>
      	<input type="checkbox" value="mia" v-model="blog.categories" />
      	<label>Raisyah</label>
      	<input type="checkbox" value="raisyah" v-model="blog.categories" />
      </div>
      <label>Author:</label>
      <select v-model="blog.author">
      	<option v-for="author in authors">{{ author }}</option>
      </select>
      <button v-on:click.prevent="post">Add Blog</button>
    </form>
    <div id="preview">
    	<h3>Preview Blog</h3>
    	<p>Blog Title: {{ blog.title }}</p>
    	<p>Blog Content:</p>
    	<p>{{ blog.content }}</p>
    	<p>Blog Categories:</p>
    	<ul>
    		<li v-for="category in blog.categories">
    			{{ category }}
    		</li>
    	</ul>
    	<p>Blog Author: {{ blog.author }}</p>
    </div> 	
  </div>
</template>

<script>

export default {
  
  data:function(){
    return{
	    blog:{
	      	title: "",
	      	content: "", 
	      	categories: [],
	      	author: "",
	    },
	    authors:['Nilai A', 'Nilai B', 'Nilai C'],
      submitted: false, 
     }
  }, 
  methods:{
    post:function(){
      this.$http.post('https://jsonplaceholder.typicode.com/posts',{
        title: this.blog.title,
        body: this.blog.content,
        userId: 1,
      }).then(function(data){
        console.log(data);
        this.submitted = true;
      });
    }
  }
}
</script>


<style>
#add-style *{
	box-sizing: border-box;
}
#add-style{
	margin: 20px auto;
	max-width: 500px;
}
label{
	display: block;
	margin: 20px 0 10px;
}
input[type="text"], textarea, select{
	display: block;
	width: 100%;
	padding: 8px;
}
#preview{
	padding: 10px 20px;
	border: 1px dotted #ccc;
	margin: 30px 0;
}
h3{
	margin-top: 10px;
}
#checkboxes-style input{
	display: inline-block;
	margin-right: 10px;
}

#checkboxes-style label{
	display: inline-block;
}
</style>