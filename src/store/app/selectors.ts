import { createSelector } from 'reselect';
import { initialState } from './reducers';
import { iAppState } from '../../domain/iStates';

const selectApp = (state: any): iAppState => state.appReducer || initialState;

const selectRouter = (state: any) => state.router;

const makeSelectError = () =>
  createSelector(
    selectApp,
    appState => appState.error,
  );

const makeSelectData = () =>
  createSelector(
    selectApp,
    appState => appState.data,
  );

const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  );

export {
  selectApp,
  makeSelectError,
  makeSelectData,
  makeSelectLocation,
};