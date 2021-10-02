<template>
  <div class="login">
    <div
      class="login__logo">
      <img src="@/assets/logo/DOIT.png" alt="" srcset="">
    </div>
    <p
      class="login__title">Login</p>
    <form
      action=""
      class="login__form">
      <custom-input
        class="login__mail"
        :title="'Username or Email'"/>
      <custom-input
        class="login__password"
        :placeholder="'password'"
        :title="'Password'"/>
      <custom-btn
        class="login__btn"
        :way="'/'"
        :title="'Login'"
        :bg="'linear-gradient(180deg, #2788F6 0%, #0960E0 100%)'"/>
    </form>
  </div>
</template>

<script>
import CustomInput from '@/components/basic/CustomInput'
import CustomBtn from '@/components/basic/CustomBtn'

export default {
  components: {
    CustomInput,
    CustomBtn
  },
  layout: 'empty'
}
</script>

<style lang="scss" scoped>
  .login {
    width: 240px;
    margin: 64px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    &__logo {
      display: flex;
      justify-content: center;
      margin-bottom: 44px;
      img {
        width: 88px;
        height: 80px;
      }
    }
    &__title {
      margin: 0 auto;
      font-family: 'Rubik';
      font-weight: 700;
      font-style: normal;
      color: #E6E6E6;
      font-size: 32px;
      line-height: 32px;
    }
    &__form {
      margin: 30px 0;
    }
    &__mail {
      margin-bottom: 16px;
    }
    &__password {
      margin-bottom: 22px;
    }
    &__btn {
      width: 100%;
    }
  }
</style>