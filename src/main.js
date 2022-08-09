import { createApp } from 'vue'
import App from './App.vue'
import mitt from "@/mitt/mitt"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import router from './router/router'
createApp(App).use(router).use(mitt).mount("#app");