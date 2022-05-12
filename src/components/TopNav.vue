<template>
  <!-- Logo and navigation bar -->
  <nav
    id="headerColor"
    class="navbar sticky-top navbar-expand-sm navbar_coca_cola"
  >
  <!-- Brand -->
  <div class="col-md-8">
  <a
  class="navbar-brand"
  href="index.html"
  id="logo"
  >

  </a>
  </div>
  <div class="container-fluid">
    <!-- Collapsible Navbar Menu Icon -->
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

  </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
</script>
<style scoped>
</style>
