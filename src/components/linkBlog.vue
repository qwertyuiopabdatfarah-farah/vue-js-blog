<template>
   <div id="link">  
     <nav>
       <ul>
         <li><router-link to="/" exact>Blog</router-link></li>
         <li><router-link to="/add" exact>addBlog</router-link></li>
       </ul>
     </nav>
     </div>
  </div> 
</template>


<script>
export default {
  data:function(){
    return{
       
   }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.router-link-active{
  background: #eee;
  color: red;
}
</style>