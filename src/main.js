import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { VueCookies } from 'vue-cookies' 
import { VueSession } from 'vue-session'
import './assets/main.css'
const app = createApp(App)

app.use(router)

// app.use(VueCookies, {
//     expires: '1d'
// })

// app.use(VueSession)

app.mount('#app')
