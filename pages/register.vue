<template>
  <div class="">
    <register-step1
      v-if="!next"
      @next-step="nextStep"/>
    <register-step2
      v-else
      @select-country="country"
      @add-username="username"
      @add-date="date"/>
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
    country (name) {
      this.user.country = name
      console.log(this.user)
    },
    username (name) {
      this.user.username = name
      console.log(this.user)
    },
    date (date) {
      this.user.date = date
      console.log(this.user)
    }
  }
}
</script>
