import { addLocaleData } from 'react-intl';
import enLocaleData from 'react-intl/locale-data/en';
import esLocaleData from 'react-intl/locale-data/es';

import enTranslationMessages from '../assets/i18n/en.json';
import esTranslationMessages from '../assets/i18n/es.json';

addLocaleData(enLocaleData);
addLocaleData(esLocaleData);

export const DEFAULT_LOCALE = 'en';

export const appLocales = [
  'en',
  'es',
];

export const formatTranslationMessages = (locale: string, messages: any) => {
  const defaultFormattedMessages: any =
    locale !== DEFAULT_LOCALE
      ? formatTranslationMessages(DEFAULT_LOCALE, enTranslationMessages)
      : {};
  const flattenFormattedMessages = (formattedMessages: any, key: string) => {
    const formattedMessage =
      !messages[key] && locale !== DEFAULT_LOCALE
        ? defaultFormattedMessages[key]
        : messages[key];
    return Object.assign(formattedMessages, { [key]: formattedMessage });
  };
  return Object.keys(messages).reduce(flattenFormattedMessages, {});
};

export const translationMessages = {
  en: formatTranslationMessages('en', enTranslationMessages),
  es: formatTranslationMessages('es', esTranslationMessages),
};
