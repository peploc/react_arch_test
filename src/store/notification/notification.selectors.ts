import { createSelector } from "reselect";
import { initialState } from "./notification.reducers";

const selectNotification = (state: any) => state.notificationReducer || initialState;

const makeSelectError = () =>
  createSelector(
    selectNotification,
    notificationState => notificationState.type === 'error'
  );

const makeSelectWarn = () =>
  createSelector(
    selectNotification,
    notificationState => notificationState.type === 'warning'
  );

const makeSelectSuccess = () =>
  createSelector(
    selectNotification,
    notificationState => notificationState.type === 'success'
  );

export { selectNotification, makeSelectError, makeSelectWarn, makeSelectSuccess };
