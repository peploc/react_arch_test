import { LOAD_DATA_SUCCESS, LOAD_DATA_ERROR, ERASE_DATA } from "./constants";

const dataLoaded = (data: Object) => {
  return {
    type: LOAD_DATA_SUCCESS,
    data
  };
};

// eslint-disable-next-line
const dataLoadingError = (error: Error) => {
  return {
    type: LOAD_DATA_ERROR,
    error
  };
};

export const eraseData = () => {
  return {
    type: ERASE_DATA
  };
};

export const getData = () => {
  return function(dispatch: any) {
    dispatch(dataLoaded(data));
  };
};

//mock of service
const data = Array(20)
  .fill(0)
  .map((el, idx) => {
    return {
      id: idx,
      title: `hola${idx * Math.random()}`,
      message: `diocane${idx * Math.random()}`
    };
  });

/*
export const getData = () => {
  return function (dispatch) {
    service.get(endpoint)
      .then(data => {
        dispatch(dataLoaded(data))
      )}
      .catch(error => {
        dispatch(dataLoadingError(error))
      })
  }
}


export const getData = () => {
  // We can invert control here by returning a function - the "thunk".
  // When this function is passed to `dispatch`, the thunk middleware will intercept it,
  // and call it with `dispatch` and `getState` as arguments. 
  // This gives the thunk function the ability to run some logic, and still interact with the store.
  (dispatch) => {
    service.get(endpoint)
    .then(
      data => dispatch(dataLoaded(data)),
      error => dispatch(dataLoadingError(error))
    )}
}
*/
