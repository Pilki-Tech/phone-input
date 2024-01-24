<script setup lang="ts">
import { ref } from 'vue'

const phone = ref('')
</script>

<template>
  <phone-input
    v-model="phone"
    :emit-country-change="true"
  />
</template>

<style scoped lang="scss">

</style>
