<template>
  <div class="about-brand">
    <h3 class="about-brand-title">What makes our brand different</h3>
    <div class="about-brand-elements">
        <div 
        v-for="brand in aboutBrands"
        :key="brand.title"
        class="about-brand-element">
            <img :src="brand.img" alt="" class="about-brand-element-img">
            <h4 class="about-brand-element-title">{{ brand.title }}</h4>
            <span class="about-brand-element-desc">{{ brand.description }}</span>
        </div>
    </div>
  </div>
</template>

<script setup>
const aboutBrands = [
    {
        img: 'Delivery.png',
        title: 'Next day as standard',
        description: 'Order before 3pm and get your order the next day as standard'
    },
    {
        img: 'Checkmark.png',
        title: 'Made by true artisans',
        description: 'Handmade crafted goods made with real passion and craftmanship'
    },
    {
        img: 'Purchase.png',
        title: 'Unbeatable prices',
        description: 'For our materials and quality you won’t find better prices anywhere'
    },
    {
        img: 'Sprout.png',
        title: 'Recycled packaging',
        description: 'We use 100% recycled to ensure our footprint is more manageable'
    }
]
</script>

<style lang="scss" scoped>
.about-brand{
    padding: 80px 80px 130px 80px;
     @media screen and (max-width: 767px) {
        padding: 48px 0px;
     }
    &-title {
        text-align: center;
        color: #2A254B;
        margin: 0 0 84px 0;
        font-style: normal;
        font-weight: 400px;
        @media screen and (max-width: 767px) {
            text-align: left;
            font-size: 20px;
            margin-bottom: 36px;
        }
    }
    &-elements {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        justify-content: space-between;
        @media screen and (max-width: 1150px) {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
        }
        @media screen and (max-width: 767px) {
            grid-template-columns: 1fr;
            padding: 36px 24px;
        }
    }
    &-element {
        background: var(--Light-Grey, #F9F9F9);
        padding: 48px;
        &-img {
            display: block;
            margin-bottom: 12px;
        }
        &-desc {
            font-size: 16px;
            line-height: 1.5;
        }
        &-title {
            margin: 0 0 12px 0;
            font-size: 20px;
        }
    }
}
</style>