<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light mb-4">
    <div class="container-fluid">
      <RouterLink to="/" class="navbar-brand">Lista de Usuarios</RouterLink>
      <div class="d-flex">
        <RouterLink to="/" class="btn btn-outline-primary me-2">Lista de Usuarios</RouterLink>
        <RouterLink to="/usuarios-form" class="btn btn-outline-secondary">Agregar Usuario</RouterLink>
      </div>
    </div>
  </nav>

  <div class="container">
    <RouterView />
  </div>
</template>

<style scoped>
</style>