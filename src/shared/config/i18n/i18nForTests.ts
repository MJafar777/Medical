import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  lng: 'uz',
  fallbackLng: 'uz',
  debug: false,
  interpolation: {
    escapeValue: false,
  },
  resources: { ru: { translations: {} } },
});

export default i18n;
