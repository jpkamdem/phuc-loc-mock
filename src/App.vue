<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HomeViewVue from './views/HomeView.vue';
import Navbar from './components/Navbar.vue';

</script>

<template>
  <Navbar />
  <RouterView />
</template>

<style scoped></style>
