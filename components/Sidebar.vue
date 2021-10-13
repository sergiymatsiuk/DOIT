<template>
  <aside class="aside">
    <nuxt-link
      class="aside__item"
      v-for="(item, idx) in asideItems"
      :key="idx"
      :to="item.to">
        <img class="aside__img" :src="item.img" :alt="item.title"/>
      </nuxt-link>
  </aside>
</template>

<script>
export default {
  data () {
    return {
      asideItems: [
        {
          title: 'Knight',
          img: require('@/assets/logo/sidebar/001_knight.svg'),
          to: '/'
        },
        {
          title: 'Trophy',
          img: require('@/assets/logo/sidebar/002_trophy.svg'),
          to: '/'
        },
        {
          title: 'Growth',
          img: require('@/assets/logo/sidebar/003_growth.svg'),
          to: '/'
        },
        {
          title: 'Network',
          img: require('@/assets/logo/sidebar/004_network.svg'),
          to: '/'
        },
        {
          title: 'Target',
          img: require('@/assets/logo/sidebar/005_target.svg'),
          to: '/'
        },
        {
          title: 'Megaphone',
          img: require('@/assets/logo/sidebar/006_megaphone.svg'),
          to: '/'
        },
      ]
    }
  }
}
</script>


<style lang="scss" scoped>
  .aside {
    background-color: $main-bg;
    position: fixed;
    z-index: 3;
    bottom: 0;
    left: 0;
    overflow: hidden;
    width: 100%;
    height: 54px;
    border-top: 1px solid #20252b;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    &__img {
      width: 22px;
      height: 22px;
      &:hover {
        filter: brightness(0) invert(1);
      }
    }
  }
  @media (min-width: 1000px) {
    .aside {
      height: 80px;
      &__img {
        width: 32px;
        height: 32px;
      }
    }
  }
  @media (min-width: 1450px) {
    .aside {
      position: fixed;
      left: 0;
      width: 112px;
      height: 100vh;
      border-right: 2px solid #20252b;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      row-gap: 80px;
    }
  }
</style>