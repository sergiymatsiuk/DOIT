<template>
  <div class="register">
    <back-arrow/>
    <div
      class="register__logo">
      <img src="@/assets/logo/DOIT.png" alt="" srcset="">
    </div>
    <p
      class="register__title">Sign up 1/2</p>
    <form
      class="register__form">
      <custom-input
        class="register__mail"
        :title="'Email'"
        :fail="$v.email.$dirty && $v.email.$error"
        :success="$v.email.$dirty && !$v.email.$error"
        v-model.trim="$v.email.$model"
        @input="changeEmail"/>
      <custom-input
        class="register__password"
        :type="'password'"
        :placeholder="'password'"
        :title="'Password'"
        :fail="$v.password.$dirty && $v.password.$error"
        :success="$v.password.$dirty && !$v.password.$error"
        v-model.trim="$v.password.$model"
        @input="changePassword"/>
      <button
        class="register__btn"
        @click.prevent="nextStep"
        >Next step</button>
    </form>
    <p class="register__with">or login with</p>
    <div class="register__box">
      <nuxt-link
        to="/"
        class="register__boxItem">
        <img src="@/assets/logo/login/fb.png" alt="" srcset="">
      </nuxt-link>
      <nuxt-link
        to="/"
        class="register__boxItem">
        <img src="@/assets/logo/login/other.png" alt="" srcset="">
      </nuxt-link>
      <nuxt-link
        to="/"
        class="register__boxItem">
        <img src="@/assets/logo/login/google.png" alt="" srcset="">
      </nuxt-link>
      <nuxt-link
        to="/"
        class="register__boxItem">
        <img src="@/assets/logo/login/steam.png" alt="" srcset="">
      </nuxt-link>
    </div>
    <nuxt-link
      to="/login"
      class="register__login"
      >Already have an account?</nuxt-link>
  </div>
</template>

<script>
import CustomInput from '@/components/basic/CustomInput'
import CustomBtn from '@/components/basic/CustomBtn'
import BackArrow from '@/components/basic/BackArrow'
import { required, minLength, email } from 'vuelidate/lib/validators'

export default {
  name: 'RegisterStep1',
  components: {
    CustomInput,
    CustomBtn,
    BackArrow
  },
  data () {
    return {
      email: '',
      password: ''
    }
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(6)
    }
  },
  layout: 'empty',
  methods: {
    changeEmail (email) {
      this.email = email
    },
    changePassword (password) {
      this.password = password
    },
    nextStep () {
      if (!this.email || this.$v.email.$error || !this.password || this.$v.password.$error) {
        alert("Add EMAIL or PASSWORD")
      } else {
        this.$emit('next-step', this.email, this.password)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .register {
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
      width: 100%;
      color: #f5f5f5;
      font-size: 16px;
      font-family: 'Rubik';
      font-weight: 700;
      background: linear-gradient(180deg, #2788F6 0%, #0960E0 100%);
      padding: 16px;
      border-radius: 2px;
      text-decoration: none;
      text-align: center;
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
    &__login {
      text-align: center;
      color: #0A68F5;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
</style>