<template>
  <div class="header">
    <nav class="header__container">
      <div
        class="header__burger"
        @click.prevent="showBurger = !showBurger"
        :class="{header__burger_active: showBurger}">
        <span></span>
      </div>
      <nuxt-link
        class="header__logo"
        to="/">
        <img src="@/assets/logo/DOIT.png" alt="" srcset="">
      </nuxt-link>
      <div
        class="header__info"
        :class="{header__info_active: showBurger}">
        <div class="header__list">
          <nuxt-link
            class="header__item"
            to="/">
            Play
          </nuxt-link>
          <nuxt-link
            class="header__item"
            to="/">
            News
          </nuxt-link>
          <nuxt-link
            class="header__item"
            to="/">
            Games
          </nuxt-link>
          <nuxt-link
            class="header__item"
            to="/">
            Shop
          </nuxt-link>
          <nuxt-link
            class="header__item"
            to="/">
            Sponsorship
          </nuxt-link>
        </div>
        <div class="header__exit">
          <custom-btn
            :way="'/'"
            :title="'Login'"
            :bg="'#1A222D'"/>
          <custom-btn
            class="header__sing"
            :way="'/'"
            :title="'Sing up'"
            :bg="'linear-gradient(180deg, #2788F6 0%, #0960E0 100%)'"/>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import CustomBtn from '@/components/basic/CustomBtn'

export default {
  components: {
    CustomBtn
  },
  data () {
    return {
      showBurger: false
    }
  } 
}
</script>

<style lang="scss" scoped>
.header {
  &__container {
    max-width: 1200px;
    margin:15px 23px;
    display: flex;
    justify-content: space-between;
  }
  &__info {
      display: none;
      background-color: $main-bg;
      z-index: 2;
    }
  &__info_active {
    position: absolute;
    left: 0;
    top: 70px;
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 580px;
    overflow: hidden;
  }
  &__logo {
    img {
      width: 56px;
      height: 48px;
    }
  }  
  &__list {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: $main-bg;
    margin-bottom: 62px;
  }  
  &__item {
    font-size: 20px;
    line-height: 24px;
    margin: 22px 0;
    color: #f5f5f5;
    text-decoration-line: none;
    font-family: 'Rubik';
    font-weight: 700;
  }
  &__exit {
    width: 95%;
    margin: 0 auto;
    display: flex;
    gap: 12px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: $main-bg;
  }
  &__burger {
    width: 24px;
    height: 14px;
    margin: auto 0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  &__burger > span,
  &__burger span::before,
  &__burger span::after {
    display: block;
    position: absolute;
    width: 24px;
    height: 2.5px;
    background-color: #F5F5F5;
  }
  &__burger > span::after {
    content: '';
    top: -8px;
  }
  &__burger > span::before {
    content: '';
    top: 8px;
  }
  &__burger_active span::after,
  &__burger_active span::before {
    display: none;
  }
}

@media (min-width: 1000px) {
  .header {
    display: flex;
    justify-content: center;
    &__burger {
      display: none;
    }
    &__container {
      width: 90%;
      margin: 32px 0;
      justify-content: space-between;
    }
    &__logo {
      margin-right: 56px;
      img {
        width: 72px;
        height: 64px;
      }
    } 
    &__info {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
    }
    &__exit {
      width: 234px;
      flex-direction: row;
      justify-content: end;
      gap: 8px;
      margin: 0;
    }
    &__list {
      width: 567px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-bottom: 0;
    }  
    &__item {
      font-size: 20px;
      line-height: 24px;
      color: #f5f5f5;
      text-decoration-line: none;
      font-family: 'Rubik';
      font-weight: 700;
    }
  }
}

@media (min-width: 1300px) {
  .header {
    &__container {
      width: 80%;
    }
  }
}
  
</style>
