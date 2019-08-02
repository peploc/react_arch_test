import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router'
import browserHistory from '../history/history';
import appReducer from '../app/reducers';
import toDoListReducer from '../to-do-list-container/reducers';

const router = connectRouter(browserHistory)

export default combineReducers({ 
  router,
  appReducer,
  toDoListReducer
});
