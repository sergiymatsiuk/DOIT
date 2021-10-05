<template>
  <div class="">
    <register-step1
      v-if="!next"
      @next-step="next=true"/>
    <register-step2
      v-else/>
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
      next: false
    }
  },
  layout: 'empty'
}
</script>
