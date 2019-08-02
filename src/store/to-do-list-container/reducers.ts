import produce from "immer";
import { LOAD_DATA_SUCCESS, LOAD_DATA_ERROR } from "./constants";
import { iToDoListState } from "../../domain/iStates";

const data = Array(20)
  .fill(0)
  .map((el, idx) => {
    return {
      id: idx,
      title: `hola${idx * Math.random()}`,
      message: `diocane${idx * Math.random()}`
    };
  });

export const initialState: iToDoListState = {
  error: false,
  data: data,
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
    }
  });

export default toDoListReducer;
