<template>
  <div class="hero">
    <HeroInfo
      title="Luxury homeware for people who love timeless design quality"
      description="Shop the new Spring 2022 collection today"
      colorLink="lightgray"
      link="#"
    />
    <img src="/img/Hero.png" alt="" class="hero-image" />
  </div>
</template>

<script setup>
import HeroInfo from "@/components/HeroInfo.vue";
</script>

<style lang="scss" scoped>
.hero {
  background: url("/img/Hero.png");
  height: 704px;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 80px;
  @media screen and (max-width: 767px) {
    height: auto;
    background: transparent;
    padding-right: 0;
    display: block;
  }
  &-image {
    max-width: 100%;
    margin-top: 32px;
    display: none;
    @media screen and (max-width: 767px){
        display: block;
    }
  }
  &-info {
    background: #fff;
    max-width: 630px;
    padding: 50px 55px;
    height: 444px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &__title {
      color: #22202e;
      font-weight: 400;
      line-height: 140%;
    }
    &__desc {
      color: #5b5676;
    }
    &-link {
      color: #2a2548;
      font-size: 16px;
      font-style: normal;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
