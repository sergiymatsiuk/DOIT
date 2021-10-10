<template>
  <div class="register">
    <back-arrow/>
    <div
      class="register__logo">
      <img src="@/assets/logo/DOIT.png" alt="" srcset="">
    </div>
    <p
      class="register__title">Sign up 2/2</p>
    <form
      class="register__form">
      <custom-input
        class="register__nickname"
        :title="'Username'"
        :placeholder="'username'"
        :fail="$v.username.$dirty && $v.username.$error"
        :success="$v.username.$dirty && !$v.username.$error"
        v-model.trim="$v.username.$model"
        @input="addUsername"/>
      <custom-select
        class="register__country"
        :title="'Country'"
        :options="countriesList"
        :success="isCountry"
        @change-select="selectCountry"/>
      <custom-date-picker
        class="register__date"
        :title="'Date'"
        :value="null"
        :success="isDate"
        @change-date="addDate"/>
      <custom-check-box
        @change="changeAgree">
        <p class="agreeText">I’m have at least 13 years of age and agree to the <span>terms of service</span></p>
      </custom-check-box>
      <button
        :disabled="allInput"
        class="register__btn"
        @click.prevent="createUser"
        >Create an account</button>
    </form>
  </div>
</template>

<script>
import BackArrow from '@/components/basic/BackArrow'
import CustomInput from '@/components/basic/CustomInput'
import CustomSelect from '@/components/basic/CustomSelect'
import CustomDatePicker from '@/components/basic/CustomDatePicker'
import CustomCheckBox from '@/components/basic/CustomCheckBox'
import countries from '@/static/country'
import { required, minLength } from 'vuelidate/lib/validators'

export default {
  name: 'RegisterStep2',
  components: {
    BackArrow,
    CustomInput,
    CustomSelect,
    CustomDatePicker,
    CustomCheckBox
  },
  data () {
    return {
      agree: false,
      username: '',
      date: '',
      country: null
    }
  },
  validations : {
    username: {
      required,
      minLength: minLength(4)
    }
  },
  methods: {
    createUser () {
      this.$emit('create-user')
    },
    selectCountry (country) {
      this.country = country
      this.$emit('select-country', country)
    },
    addUsername (name) {
      this.username = name
      this.$emit('add-username', name)
    },
    addDate (date) {
      this.date = date
      this.$emit('add-date', date)
    },
    changeAgree (agree) {
      this.agree = agree
    }
  },
  computed: {
    countriesList () {
      return countries.map(el => {
        return el.name
      })
    },
    isCountry () {
      return this.country ? true : false
    },
    isDate () {
      return this.date ? true : false
    },
    allInput () {
      return this.isCountry && this.isDate && this.$v.username.$dirty && !this.$v.username.$error && this.agree 
        ? false
        : true
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
    &__country,
    &__nickname,
    &__date {
      margin-bottom: 16px;
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
      &:disabled {
        background: grey;
      }
    }
  }
  .agreeText {
    font-size: 12px;
    font-family: 'Rubik';
    line-height: 16px;
    color: #627CA3;
    padding-right: 15px;
    margin-bottom: 22px;
    span {
      color: #0A68F5;
      &:hover {
        text-decoration: underline;
      }
    }
  }
</style>