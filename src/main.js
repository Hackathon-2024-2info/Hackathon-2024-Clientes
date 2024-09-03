import './assets/main.css'

import { createApp } from "vue"
import App from "./App.vue"
import Flicking from "@egjs/vue3-flicking";
import "@egjs/vue3-flicking/dist/flicking.css";
// Or, if you have to support IE9
import "@egjs/vue3-flicking/dist/flicking-inline.css";

const app = createApp(App);

app.component("Flicking", Flicking);
app.mount("#app");