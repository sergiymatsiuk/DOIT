<template>
  <div class="news">
    <div class="news__box">
      <h2 class="news__title">News</h2>
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

export default {
  name: 'news',
  components: {
    SelectGame,
    NewsShow
  },
  data () {
    return {
      listGame: ['football', 'soccer', 'tennis'],
      news: [
        {
          game: 'football',
          img: 'https://cf.geekdo-images.com/DPjV1iI0ygo5Bl3XLNRiIg__opengraph/img/ypxXhmwXXJn7_UlJK537UQt4jcA=/fit-in/1200x630/filters:strip_icc()/pic4449526.jpg',
          title: 'Brazil end 12-year wait for Copa America',
          text: 'A night to remember for Brazil. Drama is never too far away at Copa America and this final had it by the bucketlad. Thanks for your company. A night to remember for Brazil. Drama is never too far away at Copa America and this final had it by the bucketlad. Thanks for your company.',
          id: 1
        },
        {
          game: 'soccer',
          img: 'https://cf.geekdo-images.com/DPjV1iI0ygo5Bl3XLNRiIg__opengraph/img/ypxXhmwXXJn7_UlJK537UQt4jcA=/fit-in/1200x630/filters:strip_icc()/pic4449526.jpg',
          title: 'Brazil end 12-year wait for Copa America',
          text: 'jjbdfjebfjsebefjebfjsbej',
          id: 2
        },
        {
          game: 'soccer',
          img: 'https://cf.geekdo-images.com/DPjV1iI0ygo5Bl3XLNRiIg__opengraph/img/ypxXhmwXXJn7_UlJK537UQt4jcA=/fit-in/1200x630/filters:strip_icc()/pic4449526.jpg',
          title: 'Brazil end 12-year wait for Copa America',
          text: 'A night to remember for Brazil. Drama is never too far away at Copa America and this final had it by the bucketlad. Thanks for your company. A night to remember for Brazil. Drama is never too far away at Copa America and this final had it by the bucketlad. Thanks for your company.',
          id: 3
        },
        {
          game: 'tennis',
          img: 'https://i.kinja-img.com/gawker-media/image/upload/c_scale,f_auto,fl_progressive,pg_1,q_80,w_1600/cfd9c36617e0e2148cbb3f5e6ecba338.jpg',
          title: 'Brazil end 12-year wait for Copa America',
          text: 'A night to remember for Brazil. Drama is never too far away at Copa America and this final had it by the bucketlad. Thanks for your company.',
          id: 4
        },
      ],
      showGame: 'All'
    }
  },
  methods: {
    changeGame(game) {
      this.showGame = game
    }
  },
  computed: {
    showNews () {
      if (this.showGame === 'All') {
        return this.news
      } else {
        return this.news.filter(el=>{
          return el.game === this.showGame
        })
      }
    }
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
      font-family: 'Rubik';
      font-weight: 700;
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