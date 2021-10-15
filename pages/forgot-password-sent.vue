<template>
  <div class="forgot">
    <p
      class="forgot__title">Password sent!</p>
    <nuxt-link
      to="/"
      class="forgot__tomain"
      >Back to main</nuxt-link>
  </div>
</template>

<script>
export default {
  layout: 'empty'
}
</script>

<style lang="scss" scoped>
  .forgot {
    margin: 164px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: 'Rubik';
    &__title {
      margin: 0 auto;
      margin-bottom: 50px;
      font-weight: 700;
      font-style: normal;
      color: #E6E6E6;
      font-size: 44px;
      line-height: 50px;
    }
    &__tomain {
      text-align: center;
      margin: 0 auto;
      color: #0A68F5;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
</style>