import { createApp } from 'vue'
import { createPinia } from 'pinia'
import i18n from '../src/languages/i18n';

import './style.css'
import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)

app.use(i18n);
app.use(pinia)
app.mount('#app')
