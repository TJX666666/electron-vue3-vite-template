<script setup lang="ts">
import TopBar from './layout/topBar.vue'
import LeftDrawer from './layout/leftDrawer.vue'
import MainContent from './layout/mainContent.vue'

window.electronAPI.sendMessage('Hello from App.vue!');
</script>

<template>
  <v-card>
    <v-layout>
      <top-bar></top-bar>
      <left-drawer></left-drawer>
      <main-content></main-content>
    </v-layout>
  </v-card>
</template>

<style scoped>
</style>
