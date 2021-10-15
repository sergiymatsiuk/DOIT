<template>
  <div class="forgot">
    <back-arrow/>
    <div
      class="forgot__logo">
      <img src="@/assets/logo/DOIT.png" alt="" srcset="">
    </div>
    <p
      class="forgot__title">Forgot password</p>
    <div class="forgot__box">
    <form
      action=""
      class="forgot__form">
      <custom-input
        class="forgot__mail"
        :value="email"
        :title="'Username or Email'"
        :fail="fail"
        :message="message"
        @input="changeEmail"/>
      <div
        class="forgot__btn"
        @click.prevent="resetPassword">
        <custom-btn-without-link
        :title="'Reset password'"
        :bg="'linear-gradient(180deg, #2788F6 0%, #0960E0 100%)'"/>
      </div>
    </form>
    <nuxt-link
      to="/login"
      class="forgot__login"
      >Back to login</nuxt-link>
    </div>
  </div>
</template>

<script>
import CustomInput from '@/components/basic/CustomInput'
import CustomBtnWithoutLink from '@/components/basic/CustomBtnWithoutLink'
import BackArrow from '@/components/basic/BackArrow'
import { required, email } from 'vuelidate/lib/validators'

export default {
  components: {
    CustomInput,
    CustomBtnWithoutLink,
    BackArrow
  },
  layout: 'empty',
  data () {
    return {
      email: '',
      message: '',
      fail: false
    }
  },
  validations: {
    email: {
      required,
      email
    }
  },
  methods: {
    resetPassword () {
      if (!this.$v.email.required) {
        this.fail = true
        this.message = 'add email'
      } else if (!this.$v.email.email) {
        this.fail = true
        this.message = 'incorrect email'
      } else {
        this.$fire.database.ref(`forgot-password`).push(this.email)
        this.$router.push({ path: '/forgot-password-sent' })
      }
    },
    changeEmail (input) {
      this.$v.email.$model = input
      this.email = input
      this.fail = false
      this.message = ''
    }
  }
}
</script>

<style lang="scss" scoped>
  .forgot {
    width: 270px;
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
    &__box {
      width: 240px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 0 auto;
    }
    &__form {
      margin: 30px 0;
    }
    &__mail {
      margin-bottom: 16px;
    }
    &__btn {
      display: flex;
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