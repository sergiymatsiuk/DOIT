<template>
  <div class="wrapper">
    <sidebar />
    <div class="container">
      <nuxt />
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar'

export default {
  components: {
    Sidebar
  }
}
</script>

<style scoped>
  .container {
    max-width: 1000px;
    margin: 0 auto;
  }
</style>