<template>
    <div class="products-container">
        <div class="products">
            <ProductCard 
            v-for="product in products"
            :id="product.id"
            :key="product.id"
            :img="product.img"
            :title="product.title"
            :price="product.price"/>
        </div>
        <div class="products-link">
          <UIButton :mobile-full-width="true" color="lightgray" type="link" to="/" class="products-link">
            View collection
          </UIButton>
        </div>
    </div>
</template>

<script setup>
import UIButton from './ui/Button.vue';
import ProductCard from './ProductCard.vue';
import { ref } from 'vue';

const props = defineProps({
  products: {
    required: true
  }
})

</script>

<style lang="scss" scoped>
.products {
    padding: 0 56px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
    margin-bottom: 64px;
    @media screen and (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
      row-gap: 20px;
    }
    @media screen and (max-width: 767px) {
      
    }
    &-container {
        margin-bottom: 56px;
    }
    &-link {
        text-align: center;
        
    }
}
</style>