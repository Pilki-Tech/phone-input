import PhoneInput from './phone-input.vue';

export default {
  install(app, customOptions = {}) {
    app.component('phone-input', PhoneInput);
  },
}
