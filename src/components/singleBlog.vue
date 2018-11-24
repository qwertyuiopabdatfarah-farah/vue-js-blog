<template>
   <div id="single-blog">  
     <h1>{{ blog.title }}</h1>
     <article>{{ blog.body }}</article>
     </div>
  </div> 
</template>


<script>
export default {
  data:function(){
    return{
       id: this.$route.params.id,
       blog: {},
   }
  },
  created(){
    this.$http.get('https://jsonplaceholder.typicode.com/posts/' + this.id).then(function(data){
      //onsole.log(data);
      this.blog = data.body;
    })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#single-blog{
  max-width: 930;
  margin: 0 auto;
}
</style>