
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
    <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>导航一</template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1" @click="redirect">选项1</el-menu-item>
          <el-menu-item index="1-2" @click="redirec">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2"><i class="el-icon-menu"></i>导航二</el-menu-item>
      <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
    </el-menu>
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
        this.$router.push("/leftt");
    },
    redirec() {
        this.$router.push("/lefttt");
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
}
</script>

