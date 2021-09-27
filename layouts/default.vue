<template>
  <div class="">
    <nuxt-link to="/about">
      <h2>Hello World</h2>
    </nuxt-link>
    <nuxt-link to="/">
      <h2>Home</h2>
    </nuxt-link>
    <div class="container">
      <nuxt />
    </div>
  </div>
</template>

<style scoped>
  .container {
    min-width: 1000px;
    margin: 0 auto;
  }
</style>