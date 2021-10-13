<template>
  <div class="games">
    <div class="games__box">
      <h2
        class="games__title">Games</h2>
      <custom-input
        class="games__search"
        :placeholder="'Search the game'"
        :allW='true'
        @input='changeSearch'
        />
    </div>
    <show-games
      :games='gamesList'/>
  </div>
</template>

<script>
import CustomInput from '@/components/basic/CustomInput'
import ShowGames from '@/components/games/ShowGames.vue'

export default {
  name: 'games',
  components: {
    CustomInput,
    ShowGames
  },
  data () {
    return {
      search: '',
      games: []
    }
  },
  methods: {
    changeSearch (target) {
      this.search = target
    }
  },
  computed: {
    gamesList () {
      return this.games.filter(el => {
        return el.name.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
  async asyncData ({$fire}) {
    const gamesDB = (await $fire.database.ref('games').once('value')).val() || {}
    const games = Object.keys(gamesDB).map(key=>({...gamesDB[key], id: key}))
    return { games }
  }
}
</script>

<style lang="scss" scoped>
  .games {
    margin-top: 32px;
    &__box {
      margin-bottom: 22px;
      display: flex;
      flex-direction: column;
      gap: 32px;
    }
    &__title {
      font-family: 'Rubik-Bold';
      font-size: 44px;
      line-height: 44px;
      color: #f5f5f5;
    }
  }
  @media (min-width: 700px) {
    .games {
      margin: 0 auto;
      margin-top: 90px;
      width: 97%;
      &__box {
        margin-bottom: 27px;
        flex-direction: row;
        gap: 0;
        justify-content: space-between;
      }
      &__title {
        font-family: 'Rubik-Bold';
        font-size: 44px;
        line-height: 44px;
        color: #f5f5f5;
      }
      &__search {
        width: 50%;
      }
    }
  }
</style>