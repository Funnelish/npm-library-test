<template>
  <button class="button">
    <slot />
  </button>
</template>

<script>
export default {
  name: "MyButton",
};
</script>

<style scoped>
.button {
  background: #43b883;
  color: white;
  outline: none;
  border: none;
}
</style>
