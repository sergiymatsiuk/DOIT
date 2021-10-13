<template>
  <div class="games-container">
    <game-card
      v-for="(game, idx) in games"
      :key='idx'
      :game='game'/>
  </div>
</template>

<script>
import GameCard from './GameCard.vue'
export default {
  components: { GameCard },
  name: 'show-games',
  props: {
    games: {
      type: Array,
      default: []
    }
  }
}
</script>

<style lang="scss" scoped>
  .games-container {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  @media (min-width: 700px) {
    .games-container {
      flex-direction: row;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 18px;
    }
  }
</style>