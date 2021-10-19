<template>
  <div class="news">
    <div class="news__box">
      <h2 class="news__title" @click.prevent="test">News</h2>
      <select-game
        :games="listGame"
        @change-show-game="changeGame"/>
    </div>
    <news-show
      :news="showNews"/>
  </div>
</template>

<script>
import SelectGame from '@/components/basic/SelectGame'
import NewsShow from '@/components/news/NewsShow'
import LazyLoading from '@/components/basic/LazyLoading'

export default {
  name: 'news',
  components: {
    SelectGame,
    NewsShow,
    LazyLoading
  },
  data () {
    return {
      news: [],
      showGame: 'All',
      newsInPage: 6,
      addNewsInPage: 6
    }
  },
  methods: {
    changeGame(game) {
      this.showGame = game
    },
    getNews() {
      this.newsInPage += this.addNewsInPage
    }
  },
  computed: {
    pageNews () {
      return this.news.slice(0, this.newsInPage)
    },
    showNews () {
      if (this.showGame === 'All') {
        return this.pageNews
      } else {
        return this.pageNews.filter(el=>{
          return el.game === this.showGame
        })
      }
    },
    nameListGame () {
      return this.news.map(el=>{
        return el.game
      })
    },
    listGame () {
      return this.nameListGame.filter((el, pos) => {
        return this.nameListGame.indexOf(el) === pos
      })
    }
  },
  async asyncData ({$fire}) {
    const newsDB = (await $fire.database.ref('news').once('value')).val() || {}
    const news = Object.keys(newsDB).map(key=>({...newsDB[key], id: key}))
    return { news }
  }
}
</script>

<style lang="scss" scoped>
  .news {
    &__box {
      display: flex;
      flex-direction: column;
      gap: 22px;
      margin-top: 30px;
      margin-bottom: 30px;
    }
    &__title {
      font-family: 'Rubik-Bold';
      font-size: 48px;
      line-height: 56px;
      color: #ffffff;
    }
  }
  @media (min-width: 700px) {
    .news {
      &__box {
        flex-direction: row;
        gap: 48px;
        margin-top: 96px;
        margin-bottom: 34px;
      }
    }
  }
</style>