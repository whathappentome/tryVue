<style scoped>
 .hello{
   position: fixed;
   top: 70px;
   bottom: 20px;
   right: 20px;
   background: hotpink;
   left: 320px;
 }
</style>
<template>
  <div class="hello">
    <div onclick="test"><button onclick="test1">点击</button></div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
    console.log(window.location);
    
  },
  methods(){
    document.getElementById("parent").addEventListener("click",function(e){
        alert("parent事件被触发，"+this.id,false);
    })
    document.getElementById("child").addEventListener("click",function(e){
        alert("child事件被触发，"+this.id,false)
    })
  }
}
</script>


