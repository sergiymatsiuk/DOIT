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
    <custom-date-picker
      :title="'Date'"
      :value="null"/>
    <br>
    <custom-check-box>
    </custom-check-box>
  </div>
</template>

<script>
import CustomInput from '@/components/basic/CustomInput'
import CustomSelect from '@/components/basic/CustomSelect'
import CustomDatePicker from '@/components/basic/CustomDatePicker'
import CustomCheckBox from '@/components/basic/CustomCheckBox'

export default {
  components: {
    CustomInput,
    CustomSelect,
    CustomDatePicker,
    CustomCheckBox
  }
}
</script>

<style lang="scss">
</style>
