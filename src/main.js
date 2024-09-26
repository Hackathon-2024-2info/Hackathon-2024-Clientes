
import { createApp } from "vue"
import App from "./App.vue"
import "@egjs/vue3-flicking/dist/flicking.css";
// Or, if you have to support IE9
import "@egjs/vue3-flicking/dist/flicking-inline.css";
import router from './router';

const app = createApp(App);
app.use(router);
app.mount('#app');
