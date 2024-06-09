import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

import './assets/style/main.scss'

import { createPinia } from 'pinia'
const pinia = createPinia()

app.use(pinia).mount('#app')
