
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cost ul {
    width: 300px;
    background-color: red;
    position: fixed;
    height: 100%;
    top: 50px;
    left: 0px; 
}
.head{
    width: 100%;
    height:50px;
    background-color: greenyellow;
    position: fixed;
    top: 0px;
    left: 0px;
}
 li{
   list-style: none;
 }
</style>
<template>
  <div class="cost">
    <ul>
      <li @click="redirect">一</li>
      <li @click="redirec">二</li>
      <li>三</li>
      <li>四</li>
    </ul>
    <div class="head"></div>
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
  },
  methods: {
    redirect() {
        this.$router.push("/left");
    },
    redirec() {
        this.$router.push("/lefttt");
    },
  },
}
</script>

