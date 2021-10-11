<template>
  <div class="logo">
    <div class="logo__box">
      <h2 class="logo__title">DOIT</h2>
      <h2 class="logo__title-continue">BETA</h2>
    </div>
    <p class="logo__text">Prepare for your esports career and get ready for awesome tournaments with big prize pools and many fun!<br> Register Now!</p>
    <img class="logo__back-main" src="@/assets/logo/home-logo/backMain.svg" alt="" srcset="">
    <img class="logo__back-main" src="@/assets/logo/home-logo/neon.svg" alt="" srcset="">
    <img class="logo__back-up" src="@/assets/logo/home-logo/backUp.svg" alt="" srcset="">
    <img class="logo__back-down" src="@/assets/logo/home-logo/backUp.svg" alt="" srcset="">
    <img class="logo__back-m" src="@/assets/logo/home-logo/back-m.svg" alt="" srcset="">
    <img class="logo__back-s" src="@/assets/logo/home-logo/back-s.svg" alt="" srcset="">
    <div class="logo__exit">
      <custom-btn
        :way="'/login'"
        :title="'Login'"
        :bg="'#1A222D'"/>
      <custom-btn
        class="logo__sing"
        :way="'/register'"
        :title="'Sing up'"
        :bg="'linear-gradient(180deg, #2788F6 0%, #0960E0 100%)'"/>
    </div>
  </div>
</template>

<script>
import CustomBtn from '@/components/basic/CustomBtn'

export default {
  components: {
    CustomBtn
  }
}
</script>

<style lang="scss" scoped>
  .logo {
    width: 310px;
    position: relative;
    margin: 20vh auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: 'Rubik';
    &__box {
      display: flex;
      justify-content: center;
      margin-bottom: 8px;
    }
    &__title,
    &__title-continue {
      z-index: 1;
      margin: 0;
      padding-left: 15px;
      text-align: center;
      font-size: 84px;
      font-weight: 700;
      color: #F5F5F5;
      line-height: 84px;
    }
    &__title-continue {
      display: none;
    }
    &__text {
      z-index: 1;
      max-width: 350px;
      margin: 0 auto;
      text-align: center;
      font-size: 14px;
      line-height: 21px;
      color: #cccccc;
    }
    &__back-main,
    &__back-up,
    &__back-down {
      position: absolute;
      width: 100%;
      top: -20px;
      animation: pulsing 2s;
    }
    &__back-main {
      transform: rotate(2deg);
      animation: pulsing 2s;
    }
    @keyframes pulsing {
      0% {
        -webkit-transform: scale(0.65, 0.65) rotate(2deg);
        transform: scale(0.65, 0.65) rotate(2deg)
      }
      50% {
        -webkit-transform: scale(1.0, 1.0) rotate(2deg);
        transform: scale(1.0, 1.0) rotate(2deg);
      }
      75% {
        -webkit-transform: scale(0.65, 0.65) rotate(2deg);
        transform: scale(0.65, 0.65) rotate(2deg);
      }
      100% {
        -webkit-transform: scale(1.0, 1.0) rotate(2deg);
        transform: scale(1.0, 1.0) rotate(2deg);
      }
  }
    &__back-up {
      transform: rotate(4deg);
    }
    &__back-m {
      position: absolute;
      width: 180px;
      top: 10px;
      left: 23%;
    }
    &__back-s {
      position: absolute;
      width: 115px;
      top: 10px;
      left: 34%;
    }
    &__exit {
      display: none;
    }
  }
  @media (min-width: 1100px) {
    .logo {
      width: 1000px;
      margin-top: 50px;
      margin-bottom: 350px;
      &__box {
        margin-top: 136px;
        margin-bottom: 17px;
      }
      &__title,
      &__title-continue {
        font-size: 125px;
        line-height: 125px;
      }
      &__title-continue {
        display: flex;
      }
      &__text {
        padding-left: 15px;
        max-width: 463px;
        margin-bottom: 15px;
      }
      &__back-m {
      width: 620px;
      top: 80px;
      left: 20%;
      }
      &__back-s {
      width: 300px;
      top: 145px;
      left: 36%;
      }
      &__exit {
        z-index: 1;
        display: flex;
        width: 243px;
        flex-direction: row;
        gap: 8px;
        margin: 0 auto;
        padding-left: 15px;
      }
    }
  }
</style>