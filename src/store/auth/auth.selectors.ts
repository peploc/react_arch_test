import { createSelector } from "reselect";
import { initialState } from "./auth.reducers";

const selectAuth = (state: any) => state.authReducer || initialState;

const makeSelectToken = () =>
  createSelector(
    selectAuth,
    authState => authState.token
  );

const makeSelectUser = () =>
  createSelector(
    selectAuth,
    authState => authState.user
  );

const makeSelectIsAuth = () =>
  createSelector(
    selectAuth,
    authState => authState.isAuthenticated,
  );

export { selectAuth, makeSelectToken, makeSelectUser, makeSelectIsAuth };
