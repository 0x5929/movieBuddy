<script setup>
import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <RouterLink to="/">
      <h1><span>Movie</span>Buddy</h1>
    </RouterLink>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style lang="scss">
a {
  @apply no-underline;
}
header {
  @apply flex items-center justify-center py-2.5 px-4 shadow-sm;
  background-color: #2c3d4e;

  h1 {
    @apply text-white text-3xl font-bold;
    font-size: 28px;

    span {
      color: #42b883;
    }
  }
}
</style>
