<template>
    <ProductDetail :product="currentProduct"/>
</template>

<script setup>
import { onMounted, ref } from "vue";
import {useRoute, useRouter} from 'vue-router'
import api from "../api";
import ProductDetail from "../components/ProductDetail.vue";


const route = useRoute()
const router = useRouter()
const currentProduct = ref({})

onMounted(async () => {
    currentProduct.value = await api.getProduct(route.params.id)
})
</script>