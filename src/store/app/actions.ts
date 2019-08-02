import { LOAD_DATA_SUCCESS, LOAD_DATA_ERROR } from './constants';

const DataLoaded = (data: Object) => {
  return {
    type: LOAD_DATA_SUCCESS,
    data,
  };
}

const dataLoadingError = (error: Error) => {
  return {
    type: LOAD_DATA_ERROR,
    error,
  };
}
