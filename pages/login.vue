<template>
  <div class="login">
    <back-arrow/>
    <div
      class="login__logo">
      <img src="@/assets/logo/DOIT.png" alt="" srcset="">
    </div>
    <p
      class="login__title">Login</p>
    <form
      @submit.prevent="exit"
      class="login__form">
      <custom-input
        class="login__mail"
        :title="'Username or Email'"/>
      <custom-input
        class="login__password"
        :placeholder="'password'"
        :title="'Password'"/>
      <button class="login__btn" type="submit" @click.prevent="exit">
        <custom-btn
        :way="'/login'"
        :title="'Login'"
        :bg="'linear-gradient(180deg, #2788F6 0%, #0960E0 100%)'"/>
      </button>
    </form>
    <p class="login__with">or login with</p>
    <div class="login__box">
      <nuxt-link
        to="/"
        class="login__boxItem">
        <img src="@/assets/logo/login/fb.png" alt="" srcset="">
      </nuxt-link>
      <nuxt-link
        to="/"
        class="login__boxItem">
        <img src="@/assets/logo/login/other.png" alt="" srcset="">
      </nuxt-link>
      <nuxt-link
        to="/"
        class="login__boxItem">
        <img src="@/assets/logo/login/google.png" alt="" srcset="">
      </nuxt-link>
      <nuxt-link
        to="/"
        class="login__boxItem">
        <img src="@/assets/logo/login/steam.png" alt="" srcset="">
      </nuxt-link>
    </div>
    <nuxt-link
      to="/forgot-password"
      class="login__forgot"
      >Forgot password?</nuxt-link>
      <p
      class="login__sing">Don't have an account?
        <nuxt-link
          to="/register"
          class="login__forgot">Sing up!</nuxt-link>
      </p>
  </div>
</template>

<script>
import CustomInput from '@/components/basic/CustomInput'
import CustomBtn from '@/components/basic/CustomBtn'
import BackArrow from '@/components/basic/BackArrow'

export default {
  components: {
    CustomInput,
    CustomBtn,
    BackArrow
  },
  layout: 'empty',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
  .login {
    width: 240px;
    margin: 64px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: 'Rubik';
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
      display: flex;
      width: 100%;
    }
    &__box {
      margin-bottom: 30px;
      margin-top: 16px;
      display: flex;
      gap: 8px;
      justify-content: center;
    }
    &__boxItem {
      width: 48px;
      height: 48px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #16263D;
      box-sizing: border-box;
      border-radius: 2px;
      &:hover {
        border: 1px solid #627CA3;
      }
    }
    &__with {
      margin: 0;
      color: #627CA3;
      text-align: center;
    }
    &__forgot {
      text-align: center;
      color: #0A68F5;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
    &__sing {
      margin-top: 12px;
      color: #627CA3;
    }
  }
</style>