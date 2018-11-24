    <!-- <slot name="title"></slot>
    <h1>{{ nameTengah }}</h1>
    <slot name="isi"></slot>
    -->
<template>
  <div>
    <h1>{{ formText }}</h1>
    <form>
     <div id="form-header">
       <slot name="form-header"></slot>
     </div>
     <div id="form-fields">
       <slot name="form-fields"></slot>
     </div>  
     <div id="form-controls">
       <slot name="form-controls"></slot>
     </div> 
     <div id="form-links">   
        <ul>
          <li><a href="#">Link</a></li>          
        </ul>
      </div>  
    </form>
  </div>
</template>

<script>
export default {
  data:function(){
    return{
       formText: 'Ini Adalah Form Judul',
   }
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
