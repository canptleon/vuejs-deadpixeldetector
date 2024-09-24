import { createApp } from 'vue';
import App from './App.vue';
import { createI18n } from 'vue-i18n';
import tr from './locales/tr.json';
import en from './locales/en.json';
import './assets/tailwind.css';

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    tr
  }
});

const app = createApp(App);

app.use(i18n);
app.mount('#app');
