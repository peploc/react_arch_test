import produce from "immer";
import { LOAD_DATA_SUCCESS, LOAD_DATA_ERROR } from "./constants";
import { iAppState } from '../../domain/iStates';

export const initialState: iAppState = {
  error: false,
  data: false,
};

const appReducer = (state = initialState, action: any) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_DATA_SUCCESS:
        draft.data = action.data;
        break;

      case LOAD_DATA_ERROR:
        draft.error = action.error;
        break;
    }
  });

export default appReducer;
