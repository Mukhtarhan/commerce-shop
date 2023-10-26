<template>
    <div class="hero">
        
            <HeroInfo
            title="Luxury homeware for people who love timeless design quality"
            description="Shop the new Spring 2022 collection today"
            link="#"/>
        
    </div>
</template>

<script setup>
import HeroInfo from '@/components/HeroInfo.vue';
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
    &-info {
        background: #fff;
        max-width: 630px;
        padding: 50px 55px;
        height: 444px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        &__title {
            color: #22202E;
            font-weight: 400;
            line-height: 140%;
        }
        &__desc {
            color: #5B5676;
        }
        &-link {
            color: #2A2548;
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