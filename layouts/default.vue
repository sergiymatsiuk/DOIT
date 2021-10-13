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
    max-width: 1200px;
    margin: 0 23px;
    margin-bottom: 80px;
  }
  @media (min-width: 1220px) {
    .container {
      max-width: 1220px;
      margin: 0 auto;
      margin-bottom: 90px;
    }
  }
</style>