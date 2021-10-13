<template>
  <div class="card">
    <img
      class="card__img"
      :src="game.img"
      :alt="game.name">
    <p
      class="card__title">{{game.name}}</p>
  </div>
</template>

<script>
export default {
  name: 'game-card',
  props: {
    game: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .card {
    width: 100%;
    position: relative;
    &__img {
      width: 100%;
      height: 128px;
      object-fit: cover;
      object-position: center 10%;
      border-radius: 2px;
      opacity: 0.7;
      &:hover {
        opacity: 1;
      }
    }
    &__title {
      width: 100%;
      position: absolute;
      top: 35%;
      font-family: 'Rubik-Bold';
      font-size: 30px;
      line-height: 30px;
      color: #f5f5f5;
      text-align: center;
    }
  }
  @media (min-width: 700px) {
    .card {
      width: 48.5%;
      &__img {
        height: 220px;
      }
      &__title {
        top: 160px;
      }
    }
  }
  @media (min-width: 1220px) {
    .card {
      width: 32%;
      &__img {
        height: 500px;
      }
      &__title {
        top: 440px;
      }
    }
  }
</style>