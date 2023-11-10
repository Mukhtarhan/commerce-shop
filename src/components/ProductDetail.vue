<template>
    <div class="product">
        <div>
            <img :src="product.image" :alt="product.name">
        </div>
        <div>
            <h2 class="product-name">{{ product.name }}</h2>
            <span class="product-price">£{{ product.price }}</span>
            <div class="product-block product-description">
                <span class="prodect-block__title">Product description</span>
                <div v-html="product.description"></div>
            </div>
            <div class="product-block">
                <span class="prodect-block__title">Dimension</span>
                <span 
                    class="product-param" 
                    v-for="(param, i) in product.params" 
                    :key="i">
                    {{ param.title }}: {{ param.value }}
                </span>
            </div>
            <div class="product-block">
                <span class="product-block__title">Quantity</span>
                <div class="product-quantity">
                    <span class="product-quantity-symbol" @click="changeQuantity('minus')">-</span>
                    <span class="product-quantity-value">{{ quantity }}</span>
                    <span class="product-quantity-symbol" @click="changeQuantity('plus')">+</span>
                </div>
            </div>
            <Button>Add to Cart</Button>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue"
import Button from "../components/ui/Button.vue";

const changeQuantity = (type) => {
    if(type === 'minus') {
        quantity.value === 1 ? quantity.value = 1 : quantity.value--
    }
    if(type === 'plus') {
        quantity.value === 3 ? quantity.value = 3 : quantity.value++
    }
} 

const quantity = ref(1)
const props = defineProps({
    product: {
        type: Object,
        default: () => {},
        required: true
    }
})
</script>

<style lang="scss" scoped>
.product {
    background: #f9f9f9;
    padding: 50px 80px;
    align-items: center;
    display: grid;
    grid-template-columns: 1fr 500px;
    column-gap: 65px;
    &-name {
        margin: 0 0 16px 0;
        font-size: 36px;
    }
    &-price {
        display: block;
        font-size: 24px;
        margin-bottom: 28px;
    }
    &-descripton {
        border-top: 1px solid #ebe8f4;
        padding-top: 24px;
    }
    &-block{
        margin-bottom: 40px;
        &__title {
            display: block;
            margin-bottom: 14px;
        }
    }
    &-param {
        display: block;
    }
    &-quantity {
        background: #fff;
        width: 122px;
        height: 46px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 16px;
        &-symbol {
            color: #ebe8f4;
            cursor: pointer;
        }
    }
    
}
</style>