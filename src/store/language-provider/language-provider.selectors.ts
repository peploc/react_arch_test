import { createSelector } from 'reselect';
import { initialState } from './language-provider.reducers';

const selectLanguage = (state: any) => state.languageProviderReducer || initialState;

const makeSelectLocale = () =>
  createSelector(
    selectLanguage,
    languageState => languageState.locale,
  );

export { selectLanguage, makeSelectLocale };