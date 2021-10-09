<template>
  <client-only>
    <label :for="_uid" class="check">
      <input
        :id="_uid"
        class="check__input"
        type="checkbox"
        v-bind="$attrs"
        :checked="checked"
        @change="$emit('change', $event.target.checked)"
      />
      <span class="check__box"></span>
      <slot></slot>
    </label>
  </client-only>
</template>

<script>
export default {
  props: {
    checked: Boolean,
  }
}
</script>


<style lang="scss" scoped>
.check {
    padding-left: 28px;
    cursor: pointer;
    display: block;
    position: relative;
}
.check__input {
    position: absolute;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
}
.check__box {
    position: absolute;
    margin-left: -28px;
    width: 24px;
    height: 24px;
    background-repeat: no-repeat;
    background-image: url('@/assets/logo/checkbox/empty-normal.svg');
}
/* Checked */
.check__input:checked + .check__box {
    background-image: url('@/assets/logo/checkbox/normal.svg');
}
/* Focused */
.check__input:focus + .check__box {
    background-image: url('@/assets/logo/checkbox/empty-hover.svg');
}
.check__input:checked:focus + .check__box {
    background-image: url('@/assets/logo/checkbox/hover.svg');
}
/* Disabled */
.check__input:disabled + .check__box {
    background-image: url('@/assets/logo/checkbox/empty-disable.svg');
}
.check__input:checked:disabled + .check__box {
    background-image: url('@/assets/logo/checkbox/disable.svg');
}
</style>