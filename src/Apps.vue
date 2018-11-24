<template>
  <div>  
   <show-blog></show-blog>
   <detail-blog></detail-blog>
  </div>
</template>

<script>
import showBlog from './components/showBlog.vue'
import detailBlog from './components/detailBlog.vue'

export default {
  components: {
    'show-blog':showBlog,
    'detail-blog':detailBlog,
  },
  data:function(){
    return{
      
    }
  }
}     
</script>


<style scoped>

</style>