<script setup>
import { ref } from 'vue';
import Header from './components/Layout/Header.vue'
import Hero from './components/Hero.vue'
import AboutBrand from './components/AboutBrand.vue';
import ProductBlock from './components/ProductBlock.vue';
import Ideas from './components/Ideas.vue';


</script>

<template>
  <div class="container">
    <Header />
    <Hero />
    <AboutBrand />
    <ProductBlock />
    <Ideas />
  </div>
</template>

<style lang="scss">
@import url('https://fonts.cdnfonts.com/css/satoshi');
* {
  box-sizing: border-box;
}
body{
  margin: 0;
  padding: 0;
  font-family: 'Satoshi', sans-serif;
}
img {
  max-width: 100%;
}
.container {
  max-width: 1440px;
  margin: auto;
   
}
</style>
