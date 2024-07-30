<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
import Table from './components/Table.vue';
</script>

<template>
<q-layout view="hHh lpR fFf">
<NavBar />
<q-page-container>
  <q-page>
   <RouterView></RouterView> 
  </q-page>
  
</q-page-container>

</q-layout>
</template>

<style scoped>

</style>
