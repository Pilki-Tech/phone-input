<script setup lang="ts">
import { withDefaults, ref, defineExpose } from 'vue'
import 'vue-tel-input/vue-tel-input.css'
import type { ValidateReturnParams } from './statis-data'

const AVAILABLE_COUNTRIES = ['BY', 'UZ', 'RU']
enum CurrentIso {
  RU = 'RU',
  BY = 'BY',
  UZ = 'UZ'
}

const props = withDefaults(defineProps<{
  modelValue: string
  validCharactersOnly?: boolean
  defaultCountry?: string
  autoDefaultCountry?: boolean
}>(), {
  validCharactersOnly: true,
  defaultCountry: 'RU',
  autoDefaultCountry: true
})

const emits = defineEmits(['update:modelValue', 'validate'])
const telInputRef = ref(null)
const countryChanged = (data: {
  iso2: keyof typeof CurrentIso
  dialCode: string
  name: string
}) => emits('update:modelValue', `+${data.dialCode}`)

const emitUpdateModel = (newValue: string) => emits('update:modelValue', newValue)

const validate = (validateValue: ValidateReturnParams) => emits('validate', validateValue)

defineExpose({
  input: telInputRef
})
</script>

<template>
  <vue-tel-input
    ref="telInputRef"
    :model-value="modelValue"
    :onlyCountries="AVAILABLE_COUNTRIES"
    mode="international"
    :inputOptions="{
                  placeholder: 'Введите телефон'
                }"
    class="tw-max-w-[100px] border-solid border-1 !border-gray-standard rounded-lg"
    :default-country="defaultCountry"
    :valid-characters-only="props.validCharactersOnly"
    v-bind="$attrs"
    @country-changed="countryChanged"
    @on-input="emitUpdateModel"
    @validate="validate"
  />
</template>

<style scoped lang="scss">

</style>
