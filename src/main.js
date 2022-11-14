import { createApp } from 'vue';
import Particles from 'vue3-particles';

import App from './App.vue';

const app = createApp(App);
app.use(Particles);
app.mount('#app');
