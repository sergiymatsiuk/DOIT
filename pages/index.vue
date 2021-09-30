<template>
  <div class="">
    <h2>Let's START!</h2>
    <custom-input
      :title="'Basic'"/>
      <custom-input
      :fail="true"
      :message="'error'"
      :title="'Error'"/>
      <custom-input
      :success="true"
      :message="'success'"
      :title="'Success'"/>
  </div>
</template>

<script>
import CustomInput from '@/components/basic/CustomInput'
export default {
  components: {
    CustomInput
  }
}
</script>

<style lang="scss">
</style>
