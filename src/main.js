import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

import "bootstrap/dist/css/bootstrap.css";

app.mount('#app')

import "bootstrap/dist/js/bootstrap.js";