import { createApp } from 'vue'
import App from './App.vue'
import VantInitComponent from './components/vant'
import router from './router'
import store from './store'

const app = createApp(App)
app.use(VantInitComponent)
app.use(router)
app.use(store)
app.mount('#app')
