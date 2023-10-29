<template>
    <div 
    class="hero-info"
    :style="{ backgroundColor:  background}">
        <div class="hero-info-text">
        <h2 class="hero-info__title"
        :style="{ color: colorTitle }">{{ title }}</h2>
        <span class="hero-info__desc"
        :style="{ color: colorDescription }">{{ description }}</span>
        </div>
        <UIButton :color="colorLink || 'secondary'" type="link" to="/">
            View collection
        </UIButton> 
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
        &__title {
            color: #22202E;
            font-weight: 400;
            line-height: 140%;
        }
        &__desc {
            color: #5B5676;
            font-size: 18px;
        }
    } 
}
</style>