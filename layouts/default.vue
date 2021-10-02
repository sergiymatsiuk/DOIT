<template>
  <div class="wrapper">
    <sidebar />
    <navbar />
    <div class="container">
      <nuxt />
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar'
import Navbar from '@/components/Navbar'

export default {
  components: {
    Sidebar,
    Navbar
  }
}
</script>

<style lang="scss" scoped>
  .container {
    max-width: 1000px;
    margin: 0 auto;
    margin-bottom: 60px;
  }
</style>