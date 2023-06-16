<template>
  <div class="main-box d-flex justify-center align-center">
    <HelloWorld msg="Hi! 这是electron+vue3+vuetify+vite测试demo！！！" />
  </div>
</template>

<script setup lang="ts">
import HelloWorld from '../components/HelloWorld.vue'
</script>

<style scoped lang='scss'>
.main-box {
  height: 80vh;
}
</style>