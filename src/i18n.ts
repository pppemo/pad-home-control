import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import pl from './locales/pl.json';

export const resources = {
  en,
  pl,
};

export const defaultNS = 'common';

i18n.use(initReactI18next).init({
  resources,
  defaultNS,
  fallbackLng: 'en',
  debug: true,
});
