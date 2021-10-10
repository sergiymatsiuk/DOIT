<template>
  <div class="">
    <register-step1
      v-if="!next"
      @next-step="nextStep"/>
    <register-step2
      v-else
      @select-country="country"
      @add-username="username"
      @add-date="date"
      @create-user="createUser"/>
  </div>
</template>

<script>
import RegisterStep1 from '@/components/register/RegisterStep1'
import RegisterStep2 from '@/components/register/RegisterStep2'

export default {
  components: {
    RegisterStep1,
    RegisterStep2
  },
  data () {
    return {
      next: false,
      user: {
        email: '',
        password: '',
        country: '',
        username: '',
        date: ''
      }
    }
  },
  layout: 'empty',
  methods: {
    nextStep (email, password) {
      this.user.email = email;
      this.user.password = password;
      this.next = true
    },
    country (country) {
      this.user.country = country
    },
    username (name) {
      this.user.username = name
    },
    date (date) {
      this.user.date = date
    },
    createUser () {
      console.log(this.user)
    }
  }
}
</script>
