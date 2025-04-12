import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import './assets/style.css'

const pinia = createPinia()

createApp(App).use(pinia).mount('#app')
