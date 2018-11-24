    <!-- <form-helper>
      <h2 slot="title">Slot Pertama</h2>
      <p slot="isi">Slot Kedua</p>
    </form-helper> -->
<template>
  <div>  
       <form-helper>
         <div slot="form-header">
           <h3>H3 Judul Dorm</h3>
         </div>
         <div slot="form-fields">
           <input type="text" name="username">
           <input type="password" name="password">  
         </div>
         <div slot="form-controls">
          <button v-on:click="handleSubmit()">Save</button>
         </div>
       </form-helper>
  </div> 
</template>

<script>
import FormHelper from './components/FormHelper.vue'

export default {
  components: {
    'form-helper':FormHelper
  },
  data:function(){

  },
  methods:{
    handleSubmit:function(){
      
    }
  }
}
</script>

<style>
h2{
     color: blue;
  },
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
