<template>
  <div class="">
    <h2>Let's START!</h2>
    <br>
    <custom-select
      :title="'Country'"/>
    <br>
    <custom-input
      :title="'Basic'"/>
    <br>
    <custom-input
      :fail="true"
      :message="'error'"
      :title="'Error'"/>
    <br>
    <custom-input
      :success="true"
      :message="'success'"
      :title="'Success'"/>
    <br>
  </div>
</template>

<script>
import CustomInput from '@/components/basic/CustomInput'
import CustomSelect from '@/components/basic/CustomSelect'
export default {
  components: {
    CustomInput,
    CustomSelect
  }
}
</script>

<style lang="scss">
</style>
