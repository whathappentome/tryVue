<style scoped>
</style>
<template>
    <div>
        <input type="text" v-model="userName">
        <input type="text" v-model="passWorld">
    </div>
</template>
<script>
 export default{
     data()  {
         return {
             userName:"",
             passWorld:"",
         }
     },
     created(){

     },
 } 
</script>
