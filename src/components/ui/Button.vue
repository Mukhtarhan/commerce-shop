<template>
    <button v-if="type === 'button'"
        :class="['btn', { 'btn--primary': color === 'primary', 'btn--lightgray': color === 'lightgray', 'btn--secondary': color === 'secondary' }]">
        <slot />
    </button>
    <router-link v-else
        :class="['btn', { 'btn--primary': color === 'primary', 'btn--lightgray': color === 'lightgray', 'btn--secondary': color === 'secondary' }]"
        :to="to">
        <slot />
    </router-link>
</template>
<script setup>
const props = defineProps({
    background: {
        type: String,
        required: false
    },
    type: {
        type: String,
        default: 'button'
    },
    to: {
        type: String,
        required: false
    },
    color: {
        type: String,
        default: 'primary'
    }
})
</script>
<style lang="scss" scoped>
.btn {
    padding: 0 32px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 56px;
    border: none;
    cursor: pointer;
    font-size: 16px;
    text-decoration: none;

    &:hover {
        opacity: 0.8;
    }

    &--primary {
        background: var(--black);
        color: #fff;
    }

    &--secondary {
        background: rgba(249, 249, 249, 0.15);
        color: #fff;
    }

    &--lightgray {
        background: #F9F9F9;
        color: #2A254B;
    }
}</style>
