<template>
  <div>
    <client-only>
      <p class="title">{{title}}</p>
      <v-date-picker
        is-dark
        class="date-picker"
        color="dark"
        show-caps
        locale="en"
        v-bind="$attrs"
        :first-day-of-week="1"
        :masks="{ title: 'YYYY MMMM', input: 'D MMMM YYYY' }"
        v-on="$listeners"
        v-model="date"
      >
        <template #default="{ inputValue, togglePopover }">
          <div
            class="datepicker"
            :class="{ 'datepicker-valid':success }"
            @click="togglePopover()">
            <input
              :value="inputValue"
              class="datepicker__input" 
              readonly
              placeholder="dd-mm-yyyy"
            />
            <img src="@/assets/logo/calendar.svg" class="datepicker__logo" alt="" srcset="">
          </div>
        </template>
      </v-date-picker>
    </client-only>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    title: {
      type: String,
      default: ''
    },
    success: {
      type: Boolean,
      default: false
    },
  },
  data () {
    return {
      date: new Date()
    }
  },
  watch: {
    date () {
      console.log(this.date.toString())
      this.$emit('change-date', this.date.toString())
    }
  }
}
</script>

<style lang="scss">
.title {
  font-family: 'Rubik';
  font-size: 14px;
  line-height: 14px;
  font-weight: 400;
  margin-bottom: 6px;
  width: 240px;
}
.datepicker {
  width: 240px;
  display: flex;
  justify-content: space-between;
  position: relative;
  font-family: 'Rubik';
  font-weight: 400;
  height: 40px;
  &__input {
    width: 100%;
    padding: 0.56rem 1rem;
    border: 1px solid #16263d;
    border-radius: 2px;
    color: #627ca3;
    background: rgba($color: #000000, $alpha: 0);
    &::placeholder {
      color: #627ca3;
    }
    &:active {
      color: #e6e6e6;
      background: #16263d;
      border: 1px solid #185ec7;
      border-radius: 2px;
    }
    &:disabled {
      color: #98a4b5;
      background: #121f33;
      border-radius: 2px;
    }
    &:hover {
    background: #121F33;
    border: 1px solid #627CA3;
    }
    &:focus-visible {
      outline: none;
    }
    &:focus {
      color: #627ca3;
      background: #121f33;
      border: 1px solid #627ca3;
      border-radius: 2px;
    }
  }
  &__logo {
    position: absolute;
    top: 8px;
    right: 15px;
  }
}
.datepicker-valid {
  .datepicker__input {
    border: 1px solid #4CB725;
  }
}
.date-picker .vc-container .vc-is-dark {
  background-color: $empty-bg;
  border: 1px solid #16263D;
}
.date-picker .vc-container {
  border: 0;
}
</style>