<template>
  <div class="ideas">
    <HeroInfo
    title="It started with a small idea"
    description="A global brand with local beginnings, our story begain in a small studio in South London in early 2014"
    link="#"
    background="#2A254B"
    color-title="#fff"
    color-description="#fff" 
    :mobile-padding="true"
    bg-btn="#5B5676"/>
    <img src="room.jpg" alt="room" class="ideas-image">
  </div>

</template>

<script setup>
import HeroInfo from '@/components/HeroInfo.vue';
</script>

<style lang="scss" scoped>
.ideas {
    padding: 0 80px;
    margin-bottom: 60px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 16px;
    @media screen and (max-width: 767px) {
      grid-template-columns: 1fr;
      padding: 0;
    }
    &-image {
      height: 100%;
      object-fit: cover;
      @media screen and (max-width: 767px) {
        margin-top: 24px;
        height: auto;
      }
    }
}
</style>