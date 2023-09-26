<script setup>
import BaseButton from './BaseButton.vue';
const emit = defineEmits(['add-click']);
</script>

<template>
  <BaseBuuton color="blue" @on-click="emit('add-click')">追加</BaseBuuton>
</template>
