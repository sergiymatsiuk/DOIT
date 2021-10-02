<template>
  <button
    class="btn"
    :style="{background: bg}">
    {{title}}
  </button>
</template>

<script>
export default {
  props: {
    way: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    bg: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .btn {
    width: 100%;
    color: #f5f5f5;
    font-size: 16px;
    font-family: 'Rubik';
    font-weight: 700;
    padding: 16px;
    border-radius: 2px;
  }
  @media (min-width: 767px) {
    .btn {
      padding: 16px 30px;
    }
  }
</style>