import { GET_NOTIFICATION, CLEAR_NOTIFICATION } from './notification.actions';

export const initialState = {
  msg: {},
  type: null,
  status: null,
  id: null
}

export default function(state = initialState, action: any) {
  switch(action.type) {
    case GET_NOTIFICATION:
      return {
        msg: action.payload.msg,
        type: action.payload.type,
        status: action.payload.status,
        id: action.payload.id
      };
    case CLEAR_NOTIFICATION:
      return {
        msg: {},
        type: null,
        status: null,
        id: null
      };
    default:
      return state;
  }
}