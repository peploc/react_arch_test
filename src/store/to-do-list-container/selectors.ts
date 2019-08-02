import { createSelector } from 'reselect';
import { initialState } from './reducers';
import { iToDoListState } from '../../domain/iStates';

const selectToDoList = (state: any): iToDoListState => state.toDoListReducer || initialState;

const makeSelectError = () =>
  createSelector(
    selectToDoList,
    toDoListState => toDoListState.error,
  );

const makeSelectData = () =>
  createSelector(
    selectToDoList,
    toDoListState => toDoListState.data,
  );

export {
  selectToDoList,
  makeSelectError,
  makeSelectData
};