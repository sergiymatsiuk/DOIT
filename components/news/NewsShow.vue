<template>
  <transition-group name="news-list" tag="div" class="news-list">
    <news-card
      v-for="item in news"
      :key="item.id"
      :item="item"/>
  </transition-group>
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
  .news-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
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