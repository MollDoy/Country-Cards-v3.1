import './assets/main.css'
import '@mdi/font/css/materialdesignicons.css'

import { createApp } from 'vue'
import App from './App.vue'

import AppLink from "@/components/AppLink.vue"

import vuetify from "@/vuetify/index.js"
import router from './router'
import store from "@/store/index.js"
import i18n from './i18n/i18n.js'

const app = createApp(App)

app.component("app-link", AppLink)
app.use(vuetify)
app.use(router)
app.use(store)
app.use(i18n)
app.mount('#app')
