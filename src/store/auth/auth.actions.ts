import axios from 'axios';
import { returnNotification } from '../notification/notification.actions';

export const USER_LOADING = "USER_LOADING";
export const USER_LOADED = "USER_LOADED";
export const AUTH_ERROR = "AUTH_ERROR";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";

export const loadUser = () => (dispatch: any, getState: any) => {
    dispatch({ type: USER_LOADING });
  
    axios
      .get('/api/auth/user', tokenConfig(getState))
      .then(res =>
        dispatch({
          type: USER_LOADED,
          payload: res.data
        })
      )
      .catch(err => {
        dispatch(returnNotification(err.response.data, 'error', err.response.status));
        dispatch({
          type: AUTH_ERROR
        });
      });
  };
  
  export const register = ({ name, email, password }) => (dispatch: any) => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
  
    // Request body
    const body = JSON.stringify({ name, email, password });
  
    axios
      .post('/api/users', body, config)
      .then(res =>
        dispatch({
          type: REGISTER_SUCCESS,
          payload: res.data
        })
      )
      .catch(err => {
        dispatch(
          returnNotification(err.response.data, 'error', err.response.status, 'REGISTER_FAIL')
        );
        dispatch({
          type: REGISTER_FAIL
        });
      });
  };
  
  // Login User
  export const login = ({ email, password }) => (dispatch: any) => {
    // Headers
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
  
    // Request body
    const body = JSON.stringify({ email, password });
  
    axios
      .post('/api/auth', body, config)
      .then(res =>
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data
        })
      )
      .catch(err => {
        dispatch(
          returnNotification(err.response.data, 'error', err.response.status, 'LOGIN_FAIL')
        );
        dispatch({
          type: LOGIN_FAIL
        });
      });
  };
  
  // Logout User
  export const logout = () => {
    return {
      type: LOGOUT_SUCCESS
    };
  };
  
  // Setup config/headers and token
  export const tokenConfig = (getState: any) => {
    // Get token from localstorage
    const token = getState().authReducer.token;
  
    // Headers
    const config = {
      headers: {
        'Content-type': 'application/json',
        'x-auth-token': null
      }
    };
  
    // If token, add to headers
    if (token) {
      config.headers['x-auth-token'] = token;
    }
  
    return config;
  };