<template>
  <ul class="games">
    <li
      class="games__item"
      :class="{'games__item-active': active==='All'}"
      @click.prevent="changeActive('All')">All</li>
    <li
      class="games__item"
      :class="{'games__item-active': active===game}"
      @click.prevent="changeActive(game)"
      v-for="(game, idx) in games"
      :key="idx">
      {{game}}</li>
  </ul>
</template>

<script>
export default {
  name: 'select-game',
  props: {
    games: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      active: 'All'
    }
  },
  watch: {
    active () {
      this.$emit('change-show-game', this.active)
      console.log(this.active)
    }
  },
  methods: {
    changeActive(item) {
      this.active = item
    }
  }
}
</script>

<style lang="scss" scoped>
  .games {
    display: flex;
    gap: 7px;
    flex-wrap: wrap;
    &__item {
      padding: 16px;
      font-family: 'Rubik';
      font-size: 14px;
      font-weight: 600;
      line-height: 14px;
      color:#A0A5AD;
      background: #14191F;
      &:hover {
        color: #0F1215;
        background: #D8DFEB;
      }
    }
    &__item-active {
      color: #0F1215;
      background: #D8DFEB;
    }
  }
  @media (min-width: 700px) {
    .games {
      display: flex;
      gap: 2px;
      &__item {
        font-size: 18px;
        font-weight: 600;
        line-height: 24px;
      }
    }
  }
</style>