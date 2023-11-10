<template>
<div class="product">
    <router-link :to="`products/${id}`">
        <img :src="img" :alt="title" class="product-image" >
    </router-link>
    <router-link :to="`products/${id}`" class="product-name">{{ title }}</router-link>
    <span class="product-price">£{{ price }}</span>
</div>  
</template>

<script setup>
const props = defineProps({
    id: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
})
</script>

<style lang="scss" scoped>
.product{
    &-image {
        display: block;
        margin-bottom: 24px;
        object-fit: cover;
    }
    &-name {
        display: block;
        color: #2A254B;
        font-size: 20px;
        line-height: 28px;
        margin-bottom: 8px;
        @media screen and (max-width: 767px) {
            font-size: 16px;
        }
    }
    &-price {
        display: block;
        font-size: 18px;
        @media screen and (max-width: 767px) {
            font-size: 16px;
        }
    }
}
</style>