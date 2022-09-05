import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import Ripple from 'primevue/ripple';


import './style/style.scss'
// import './style/them/fluent-ui.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css';
import './style/tailwind.scss'
// import 'primevue/resources/themes/fluent-light/theme.css'
// import 'primevue/resources/themes/bootstrap4-light-purple/theme.css'


const app = createApp(App)

app.directive('ripple', Ripple);
app.use(createPinia())
app.use(router)
app.use(PrimeVue, {ripple: true});

app.mount('#app')
