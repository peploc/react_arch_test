export const CHANGE_LOCALE = 'app/LanguageToggle/CHANGE_LOCALE';

export const changeLocale = (languageLocale: any) => {
    return {
      type: CHANGE_LOCALE,
      locale: languageLocale,
    };
  }