<template>
  <div
    class="select"
    :class="{ 'select-valid' : success }">
    <label
      class="select__label"
      >{{title}}</label>
    <v-select
      v-model="select"
      :disabled="false" 
      class="select__custom"
      :options="options"
    />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    options: {
      type: Array,
      required: true
    },
    success: {
      type: Boolean,
      default: false
    },
  },
  data () {
    return {
      select: ''
    }
  },
  watch: {
    select () {
      this.$emit('change-select', this.select)
    }
  }
}
</script>

<style lang="scss">
.select {
  display: flex;
  flex-direction: column;
  width: 240px;
  &__label {
    font-family: 'Rubik';
    font-size: 14px;
    line-height: 14px;
    font-weight: 400;
    margin-bottom: 6px;
  }
  &__custom {
    .vs__dropdown-option {
      color: #627CA3;
      font-family: 'Rubik'
    }
    .vs__dropdown-option--highlight {
      background: #1472FF;
      color: white;
    }
    .vs__dropdown-option--disabled {
      background: inherit;
      color: blue;
    }

    .vs__clear,
    .vs__open-indicator {
    fill: #627CA3;
    }

    .vs__search::placeholder,
    .vs__dropdown-menu {
      background: $main-bg;
      border: 1px solid #185EC7;
    }

    .vs__dropdown-menu {
      max-height: 250px;
    }

    .vs__dropdown-toggle {
      border: 1px solid #16263D;
    }

    .vs__search,
    .vs__search:focus {
      color: #E6E6E6;
      padding: 6px 16px;
      font-family: 'Rubik';
      font-size: 16px;
      margin-top: 2px;
    }
    .vs__selected {
      color: #627ca3;
      padding: 6px 16px;
      font-family: 'Rubik';
      font-size: 16px;
      margin-top: 2px;
    }
  }
}
.select-valid {
  .select__custom {
    .vs__dropdown-toggle {
      border: 1px solid #4CB725;
    }
  }
}
</style>