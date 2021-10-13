<template>
  <div class="card">
    <img
      class="card__img"
      :src="item.img"
      :alt="item.title">
    <div class="card__info">
      <p class="card__title">{{item.title}}</p>
      <p class="card__text">{{item.text}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .card {
    display: flex;
    flex-direction: column;
    width: 100%;
    cursor: pointer;
    &__img {
      width: 100%;
      height: 160px;
      object-fit: cover;
      object-position: 50% 20%;
    }
    &__info {
      display: flex;
      flex-direction: column;
      gap: 16px;
      padding: 22px 16px 30px;
      background: #10171F;
    }
    &__title {
      font-family: 'Rubik';
      font-weight: 500;
      font-size: 18px;
      line-height: 24px;
      color: #f5f5f5;
    }
    &__text {
      font-family: 'Rubik';
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
      color: #67707A;
    }
  }
  @media (min-width: 700px) {
    .card {
      flex-direction: row;
      align-items: start;
      align-items: stretch;
      &__img {
        max-width: 208px;
        height: 328px;
      }
      &__info {
        width: 100%;
        align-items: stretch;
        gap: 14px;
        padding: 24px 78px 34px 34px;
      }
      &__title {
        font-size: 24px;
        line-height: 32px;
        color: #f5f5f5;
      }
      &__text {
        font-size: 16px;
        line-height: 24px;
        color: #67707A;
      }
    }
  }
  @media (min-width: 1124px) {
    .card {
      max-width: 48%;
      &__img {
        height: 100%;
      }
    }
  }
</style>