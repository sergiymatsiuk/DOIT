<template>
  <button type="submit" @click.prevent="testAxios">hello world</button>
</template>

<script>
import CustomDatePicker from '@/components/basic/CustomDatePicker'

export default {
  components: {
    CustomDatePicker
  },
  methods: {
    async testAxios () {
      const res = await this.$axios.get('https://doit-abd08-default-rtdb.firebaseio.com/news.json?limitToFirst=5')
      console.log(res.data)
    }
  }
}
</script>