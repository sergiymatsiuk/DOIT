<template>
  <transition-group name="news-list" tag="div">
    <div class="news-list" v-for="blockNews in arrOfNews" :key="blockNews[0].id">
      <news-card
        v-for="item in blockNews.slice(0, 2)"
        :key="item.id"
        :item="item"/>
      <news-card-small
        v-for="item in blockNews.slice(2, 6)"
        :key="item.id"
        :item="item"/>
    </div>
  </transition-group>
</template>

<script>
import NewsCard from '@/components/news/NewsCard'
import NewsCardSmall from '@/components/news/NewsCardSmall'

export default {
  name: 'news-show',
  components: {
    NewsCard, NewsCardSmall
  },
  data () {
    return {
      size: 6
    }
  },
  props: {
    news: {
      type: Array,
      default: []
    }
  },
  computed: {
    arrOfNews () {
      let arrNews = []
      for ( let i = 0; i<Math.ceil(this.news.length/this.size); i++) {
        arrNews.push(this.news.slice((i*this.size), (i*this.size)+this.size))
      }
      return arrNews
    }
  }
}
</script>

<style lang="scss" scoped>
  .news-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 24px;
  }
  @media (min-width: 1124px) {
    .news-list {
      flex-direction: row;
      flex-wrap: wrap;
      gap: 19px;
    }
  }
  .news-list-enter-active {
    transition: opacity 3s;
  }

  .news-list-enter, .news-list-leave-active {
    opacity: 0;
  }
</style>