<template>
  <nuxt-link
    class="back"
    to="/">
      <img class="" :src="require('@/assets/logo/login/arrow_left.svg')" alt="back"/>
    </nuxt-link>
</template>

<style lang="scss" scoped>
  .back {
    position: absolute;
    top: 23px;
    left: 23px;
    &:hover {
      filter: brightness(0) invert(1);
    }
  }
</style>