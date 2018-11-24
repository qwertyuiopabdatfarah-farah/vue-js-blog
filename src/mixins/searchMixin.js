export default{
	computed: {
	 filterBlogs: function(){
 		return this.blogs.filter((blog) => { 
          return blog.title.match(this.search);
 		});
	},

	 filterBlogslain: function(){
 		return this.blogs.filter((blog) => { 
          return blog.body.match(this.search);
 		});
	},

 }
}