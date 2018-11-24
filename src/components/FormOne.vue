<template>
   <div>  
       <form-helper>
         <div slot="form-header">
           <h3>Form - One Contact Us</h3>
         </div>
         <div slot="form-fields">
           <input type="text" name="name" placeholder="Name">
           <label>Message:</label>
           <textarea></textarea>
         </div>
         <div slot="form-controls">
          <button v-on:click="handleSubmit">Send Message</button>
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