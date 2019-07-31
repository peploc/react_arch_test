import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';
import history from '../history/history';

const middlewares = [thunk, routerMiddleware(history)]

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);
