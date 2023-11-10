import { createRouter, createWebHistory } from "vue-router";
import Index from '../src/views/Index.vue'
import Product from '../src/views/Product.vue'
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index
        },
        {
            path: '/products/:id',
            name: 'Product',
            component: Product
        },
    ]
})

export default router;