import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./routes";

import "./style.css";
import App from "./App.vue";

const pinia = createPinia();

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { aliases, mdi } from "vuetify/lib/iconsets/mdi";
import "@mdi/font/css/materialdesignicons.css";

const vuetify = createVuetify({
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
  components,
  directives,
});

const app = createApp(App);

app.use(pinia);
app.use(vuetify);
app.use(router);
app.mount("#app");
