<script setup>
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
import Register from './Register.vue'
import router from '../router'
</script>

<template>
  <link rel="icon" type="image/x-icon" href="icons/push.png">
  <q-header elevated class="bg-primary text-white" height-hint="98">
    <q-toolbar>
      <q-toolbar-title>
        <q-avatar>
          <img src="./icons/push.png">
        </q-avatar>
        <router-link to="/">Ramais Yukaline</router-link>
      </q-toolbar-title>
    </q-toolbar>

    <q-tabs align="center">
      <q-route-tab to="/register" label="Cadastrar Colaborador" />
      <q-route-tab to="/edit" label="Editar Colaborador"></q-route-tab>
       <!-- <q-route-tab to="/page3" label="Page Three" /> -->
    </q-tabs>
  </q-header>
</template>

<style>
  a{
    text-decoration: none;
    color: aliceblue;
  }

</style>