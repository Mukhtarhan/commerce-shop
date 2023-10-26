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
        <a :href="link" 
        :style="{ color: colorLink, backgroundColor: bgBtn}"
        class="hero-info-link">View collection</a>
    </div>
</template>

<script setup>
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
        default: '#5B5676'
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
        &-link {
            color: #2A2548;
            font-size: 16px;
            font-style: normal;
            padding: 16px 32px;
            width: 170px;
            cursor: pointer;
            text-decoration: none;
        }
    } 
}
</style>