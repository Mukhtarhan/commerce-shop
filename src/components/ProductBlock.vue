<template>
    <div class="products-container">
        <div class="products">
            <ProductCard 
            v-for="product in products" 
            :key="product.id"
            :img="product.img"
            :title="product.title"
            :price="product.price"/>
        </div>
        <router-link class="products-link">View collection</router-link>
    </div>
</template>

<script setup>
import ProductCard from './ProductCard.vue';
import { ref } from 'vue';
const products =ref([
  {
    id: 1,
    img: 'product1.png',
    title: 'The Dandy chair',
    price: 250
  },
  {
    id: 2,
    img: 'product2.png',
    title: 'Rustic Vase Set',
    price: 155
  },
  {
    id: 3,
    img: 'product3.png',
    title: 'The Silky Vase',
    price: 125
  },
  {
    id: 4,
    img: 'product4.png',
    title: 'The Silky Vase',
    price: 399
  }
])
</script>

<style lang="scss" scoped>
.products {
    padding: 0 80px;
    display: flex;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
    margin-bottom: 64px;
    &-container {
        margin-bottom: 56px;
    }
    &-link {
        display: block;
        text-align: center;
        color: #2A254B;
    }
}
</style>