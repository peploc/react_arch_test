import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router'
import history from '../history/history';

const router = connectRouter(history)

export default combineReducers({ 
  router
});
