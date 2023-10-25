<template>
    <div class="hero">
        <div class="hero-info">
            <div class="hero-info-text">
                <h2 class="hero-info__title">Luxury homeware for people who love timeless design quality</h2>
                <span class="hero-info__desc">Shop the new Spring 2022 collection today</span>
            </div>
            <a href="" class="hero-info-link">View collection</a>
        </div>
    </div>
</template>

<script setup>

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