import { createApp } from 'vue'
import App from './App.vue'
import PhoneInput from './index.js'

const app = createApp(App);

app.use(PhoneInput)

app.mount('#app')
