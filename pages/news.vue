<template>
  <div class="container">
    <h2 class="news__title">News</h2>
    <select-game
    :games="listGame"
    @change-show-game="changeGame"/>
    <h3>{{showGame}}</h3>
    <news-show/>
  </div>
</template>

<script>
import SelectGame from '@/components/basic/SelectGame'
import NewsShow from '@/components/news/NewsShow'

export default {
  name: 'news',
  components: {
    SelectGame,
    NewsShow
  },
  data () {
    return {
      listGame: ['football', 'soccer', 'tennis'],
      showGame: 'All'
    }
  },
  methods: {
    changeGame(game) {
      this.showGame = game
    }
  }
}
</script>

<style lang="scss" scoped>

</style>