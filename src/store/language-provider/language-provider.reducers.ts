import produce from "immer";

import { CHANGE_LOCALE } from "./language-provider.actions";
import { DEFAULT_LOCALE } from "../../config/i18n.config";

export const initialState = {
  locale: DEFAULT_LOCALE
};

export const languageProviderReducer = (state = initialState, action: any) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_LOCALE:
        draft.locale = action.locale;
        break;
    }
  });
