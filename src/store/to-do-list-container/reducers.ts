import produce from "immer";
import { LOAD_DATA_SUCCESS, LOAD_DATA_ERROR, ERASE_DATA } from "./constants";
import { iToDoListState } from "../../domain/iStates";

export const initialState: iToDoListState = {
  error: false,
  data: false
};

const toDoListReducer = (state = initialState, action: any) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_DATA_SUCCESS:
        draft.data = action.data;
        break;

      case LOAD_DATA_ERROR:
        draft.error = action.error;
        break;

      case ERASE_DATA:
        draft.data = false;
        break;
    }
  });

export default toDoListReducer;
