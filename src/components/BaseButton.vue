<script setup>
const props = defineProps({ color: String });
const emit = defineEmits(['on-click']);
const onClick = (str) => {
  emit('on-click', str);
};
</script>

<template>
  <button class="btn" :class="props.color" @click="onClick('あああ')"><slot /></button>
</template>

<style scoped>
.btn {
  padding: 8px;
  border-radius: 6px;
  color: #fff;
  text-align: center;
  font-size: 14px;
}
.blue {
  background-color: #03a9f4;
}

.green {
  background-color: #00c853;
}

.pink {
  background-color: #ff4081;
}
</style>
