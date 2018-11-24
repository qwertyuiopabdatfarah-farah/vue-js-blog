<template>
  <div>  
       <form-helper>
         <div slot="form-header">
           <h3>Form-Two Login</h3>
         </div>
         <div slot="form-fields">
           <input type="text" name="username" placeholder="Username" required="required">
           <input type="password" name="password" placeholder="Password" required="required">  
         </div>
         <div slot="form-controls">
          <button v-on:click="handleSubmit">Login</button>
         </div>
       </form-helper>
  </div> 
</template>

<script>
import FormHelper from './FormHelper.vue'

export default {
  components: {
    'form-helper':FormHelper
  },
  data:function(){
    return{
        
     
   }
  },
 methods:{
  handleSubmit:function(){

  }
 } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>