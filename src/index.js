import PhoneInput from './phone-input.vue';
import VueTelInput from 'vue-tel-input';

export default {
  install(app, customOptions = {}) {
    app.use(VueTelInput);
    app.component('phone-input', PhoneInput);
  },
}
