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
    <lazy-loading
      @get="getNews"/>
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
      setTimeout(()=>{this.newsInPage += this.addNewsInPage}, 500)
    },
    test () {
      this.$fire.database.ref('news').push({
        game: "CS:GO",
        img: "https://firebasestorage.googleapis.com/v0/b/doit-abd08.appspot.com/o/test%2FRectangle%202%20(1).png?alt=media&token=e5e6a973-abf2-428d-b15b-d058f0e6a62e",
        text: "A night to remember for Brazil. Drama is never too far away at Copa America and this final had it by the bucketlad. Thanks for your company. A night to remember for Brazil. Drama is never too far away at Copa America and this final had it by the bucketlad. Thanks for your company.",
        title: "Brazil end 12-year wait for Copa America"
      })
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