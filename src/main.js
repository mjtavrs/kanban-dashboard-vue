import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import piniaPersistedstate from 'pinia-plugin-persistedstate'
import router from './router'
import './assets/style.css'
import VueTippy from 'vue-tippy'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/themes/light-border.css'

const pinia = createPinia()
pinia.use(piniaPersistedstate)

createApp(App).use(pinia).use(router).use(VueTippy).mount('#app')
