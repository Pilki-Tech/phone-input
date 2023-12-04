<script setup lang="ts">
import { withDefaults, ref, defineExpose } from 'vue'
import 'vue-tel-input/vue-tel-input.css';

const AVAILABLE_COUNTRIES = ['BY', 'UZ', 'RU']
enum CurrentIso {
  RU = 'RU',
  BY = 'BY',
  UZ = 'UZ'
}

const props = withDefaults(defineProps<{
  modelValue: string
  validCharactersOnly?: boolean
}>(), {
  validCharactersOnly: true
})

const emits = defineEmits(['update:modelValue'])
const telInputRef = ref(null)
const countryChanged = (data: {
  iso2: keyof typeof CurrentIso
  dialCode: string
  name: string
}) => emits('update:modelValue', `+${data.dialCode}`)

const emitUpdateModel = (newValue: string) => emits('update:modelValue', newValue)

defineExpose({
  input: telInputRef
})
</script>

<template>
  <div>
    <vue-tel-input
      ref="telInputRef"
      :model-value="modelValue"
      :onlyCountries="AVAILABLE_COUNTRIES"
      mode="international"
      :inputOptions="{
                  placeholder: 'Введите телефон'
                }"
      class="tw-max-w-[100px] border-solid border-1 !border-gray-standard rounded-lg"
      defaultCountry="RU"
      :valid-characters-only="props.validCharactersOnly"
      @country-changed="countryChanged"
      @on-input="emitUpdateModel"
    />
  </div>
</template>

<style scoped lang="scss">

</style>
