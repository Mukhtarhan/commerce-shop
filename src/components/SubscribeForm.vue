<template>
  <form class="subscribe-form">
    <input
      type="text"
      class="input-text subscribe-form-input"
      placeholder="your@email.com"
      :style="{ backgroundColor: bgInput, color: colorText }"
    />
    <Button :color="colorButton || 'primary'">Sign up</Button>
  </form>
</template>

<script setup>
import Button from './ui/Button.vue';

const props = defineProps({
    bgInput: {
        type: String,
        required: false
    },
    colorButton: {
        type: String,
        required: false
    },
    colorText: {
        type: String,
        required: false
    }
})


</script>

<style lang="scss" scoped>
.subscribe-form {
  display: flex;
  &-input {
    flex-grow: 1;
  }
}
</style>
