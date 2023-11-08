<script setup lang="ts">
import { defineProps } from 'vue'
import VueTelInput from 'vue-tel-input';
import 'vue-tel-input/vue-tel-input.css';

const AVAILABLE_COUNTRIES = ['BY', 'UZ', 'RU']
enum CurrentIso {
  RU = 'RU',
  BY = 'BY',
  UZ = 'UZ'
}

defineProps<{
  modelValue: string
}>()
const emits = defineEmits(['update:modelValue'])
const countryChanged = (data: {
  iso2: keyof typeof CurrentIso
  dialCode: string
  name: string
}) => emits('update:modelValue', `+${data.dialCode}`)

const emitUpdateModel = (newValue: string) => emits('update:modelValue', newValue)
</script>

<template>
  <vue-tel-input
    :model-value="modelValue"
    :onlyCountries="AVAILABLE_COUNTRIES"
    mode="international"
    :inputOptions="{
                  placeholder: 'Введите телефон'
                }"
    class="tw-max-w-[100px] border-solid border-1 !border-gray-standard rounded-lg"
    @country-changed="countryChanged"
    @on-input="emitUpdateModel"
  />
</template>

<style scoped lang="scss">

</style>
