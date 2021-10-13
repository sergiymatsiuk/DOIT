<template>
  <div class="show-news-box">
    <news-card
      v-for="(item, idx) in news"
      :key="idx"
      :item="item"/>
  </div>
</template>

<script>
import NewsCard from '@/components/news/NewsCard'

export default {
  name: 'news-show',
  components: {
    NewsCard
  },
  props: {
    news: {
      type: Array,
      default: []
    }
  }
}
</script>

<style lang="scss" scoped>
  .show-news-box {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  @media (min-width: 1124px) {
    .show-news-box {
      flex-direction: row;
      flex-wrap: wrap;
      gap: 19px;
    }
  }
</style>