<script setup>
import { onMounted, ref } from 'vue';
import api from '../api';
import Hero from '@/components/Hero.vue'
import Loader from '../components/ui/Loader.vue';
import AboutBrand from '@/components/AboutBrand.vue';
import ProductBlock from '@/components/ProductBlock.vue';
import Ideas from '@/components/Ideas.vue';
import Subscribe from '../components/Subscribe.vue';

const popularProducts = ref([])

onMounted(async () => {
  popularProducts.value = await api.getPopularProducts();
  load.value = false
})

const load = ref(true)
</script>

<template>
  <div>
    <Hero />
    <AboutBrand />
    <Loader v-if="load"/>
    <ProductBlock :products="popularProducts" v-else/>
    <Ideas />
    <Subscribe />
  </div>
</template>

