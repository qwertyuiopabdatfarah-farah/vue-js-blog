<template>
  <div> 
   <link-blog></link-blog>
   <router-view></router-view>
  </div>
</template>

<script>
import addBlog from './components/addBlog.vue'
import showBlog from './components/showBlog.vue'
//import detailBlog from './components/detailBlog.vue'
import linkBlog from './components/linkBlog.vue'

export default {
  components: {
    'add-blog':addBlog,
    'show-blog':showBlog,
    //'detail-blog':detailBlog,
    'link-blog': linkBlog,
  },
  data:function(){
    return{
      
    }
  }
}     
</script>


<style>
body{
  margin: 0;
  font-family: 'Nunito SemiBold';
}
</style>



