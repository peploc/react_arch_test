import React from 'react';
import { IntlProvider } from 'react-intl';
import { useSelector, useDispatch } from "react-redux";
import { makeSelectLocale } from '../store/language-provider/language-provider.selectors';
import { translationMessages } from '../config/i18n.config';

export const LanguageProvider = (props) => {
    const locale = useSelector(makeSelectLocale())
  return (
    <IntlProvider
      locale={locale}
      key={locale}
      messages={translationMessages[locale]}
    >
      {React.Children.only(props.children)}
    </IntlProvider>
  );
}
