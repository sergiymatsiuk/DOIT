<template>
  <div class="">
    <register-step1
      v-if="!next"
      @next-step="next=true"/>
  </div>
</template>

<script>
import RegisterStep1 from '@/components/register/RegisterStep1'

export default {
  components: {
    RegisterStep1
  },
  data () {
    return {
      next: false
    }
  },
  layout: 'empty'
}
</script>
