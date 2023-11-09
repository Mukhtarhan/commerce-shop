<template>
    <div class="hero-info-container">
    <div class="hero-info"
    :style="{ backgroundColor:  background}" :class="{'hero-info--mobile-padding': mobilePadding}">
        <div class="hero-info-text">
        <h2 class="hero-info__title"
        :style="{ color: colorTitle }">{{ title }}</h2>
        <span class="hero-info__desc"
        :style="{ color: colorDescription }">{{ description }}</span>
        </div>
        
        <UIButton :mobile-full-width="true" :color="colorLink || 'secondary'" type="link" to="/">
            View collection
        </UIButton> 
        </div>
        
    </div>
</template>

<script setup>
import UIButton from './ui/Button.vue';
const props = defineProps({
    title: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    link: {
        type: String,
        required: false
    },
    colorTitle: {
        type: String,
        default: ''
    },
    colorDescription: {
        type: String,
        default: '#5B5676'
    },
    background: {
        type: String,
        default: '#fff'
    },
    colorLink: {
        type: String,
        required: false
    },
    bgBtn: {
        type: String,
        default: '#fff'
    },
    mobilePadding: {
        type: Boolean,
        default: false
    }
})
</script>

<style lang="scss" scoped>
.hero {
    &-info{
        background: #fff;
        max-width: 630px;
        padding: 50px 55px;
        min-height: 444px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        @media screen and (max-width: 767px) {
            padding: 47px 0 32px 0;
            min-height: 0;
        }
        &__image {
            margin-top: 32px;
        }
        &-text {
            @media screen and (max-width: 767px) {
                margin-bottom: 32px;
            }
        }
        &__title {
            color: #22202E;
            font-weight: 400;
            line-height: 140%;
        }
        &__desc {
            color: #5B5676;
            font-size: 18px;
        }
        &--mobile-padding {
            @media screen and (max-width: 767px) {
                padding: 36px 32px;
            }
        }
    } 
}
</style>