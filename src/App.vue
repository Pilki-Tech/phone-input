<script setup lang="ts">
import { ref } from 'vue'

const phone = ref('')
</script>

<template>
  <phone-input
    v-model="phone"
  />
</template>

<style scoped lang="scss">

</style>
