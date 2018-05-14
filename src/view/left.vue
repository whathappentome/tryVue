<style scoped>
 .hello{
   position: fixed;
   top: 70px;
   bottom: 20px;
   right: 20px;
   background: yellowgreen;
   left: 320px;
 }
</style>
<template>
  <div class="hello">
    <div>fffffffffffffffffffffffffffffffff</div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>


