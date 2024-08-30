import { createI18n } from 'vue-i18n';

// import { useUserStore } from "../stores/UserStore";

// Import your language files
import en from './en.json';
import ru from './ru.json';

// const userStore = useUserStore();
// const languageCode = storeToRefs(userStore);

const messages = {
    en,
    ru,
  };

const i18n = createI18n({
    locale: 'ru', // set locale
    fallbackLocale: 'ru', // set fallback locale
    messages, // set locale messages
});


export default i18n