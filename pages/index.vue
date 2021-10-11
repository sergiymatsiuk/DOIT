<template>
  <div class="">
    <logo/>
    <h2>fbekufeb</h2>
    <!-- <h2>Let's START!</h2>
    <br>
    <custom-select
      :title="'Country'"
      :options="['ukraine', 'usa', 'poland', 'italy']"/>
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
    </custom-check-box> -->
  </div>
</template>

<script>
import CustomInput from '@/components/basic/CustomInput'
import CustomSelect from '@/components/basic/CustomSelect'
import CustomDatePicker from '@/components/basic/CustomDatePicker'
import CustomCheckBox from '@/components/basic/CustomCheckBox'
import Logo from '@/components/Logo.vue'

export default {
  components: {
    CustomInput,
    CustomSelect,
    CustomDatePicker,
    CustomCheckBox,
    Logo
  }
}
</script>

<style lang="scss">
</style>
