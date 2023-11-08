import PhoneInput from './phone-input.vue';

export { PhoneInput };

export default {
  install(app, customOptions = {}) {
    app.component('phone-input', PhoneInput);
  },
}
