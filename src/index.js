import PhoneInput from './phone-input.vue';

export default {
  install(app, customOptions = {}) {
    const {
      dropdownOptions: customDropdownOptions,
      inputOptions: customInputOptions,
      ...otherCustomOptions
    } = customOptions;
    const {
      dropdownOptions: defaultDropdownOptions,
      inputOptions: defaultInputOptions,
      ...otherDefaultOptions
    } = defaultOptions;

    utils.options = {
      inputOptions: {
        ...defaultInputOptions,
        ...customInputOptions,
      },
      dropdownOptions: {
        ...defaultDropdownOptions,
        ...customDropdownOptions,
      },
      ...otherDefaultOptions,
      ...otherCustomOptions,
    };
    app.component('phone-input', PhoneInput);
  },
}
