import { createApp } from 'vue'
import App from './App.vue'
import BootstrapVue3 from 'bootstrap-vue-3'
import mitt from "@/mitt/mitt"
import router from './router/router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

const app = createApp(App)
app.use(BootstrapVue3)
app.use(mitt)
app.use(router)
app.mount('#app')