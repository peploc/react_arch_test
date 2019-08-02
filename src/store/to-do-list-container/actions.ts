import { LOAD_DATA_SUCCESS, LOAD_DATA_ERROR } from "./constants";

const dataLoaded = (data: Object) => {
  return {
    type: LOAD_DATA_SUCCESS,
    data
  };
};

const dataLoadingError = (error: Error) => {
  return {
    type: LOAD_DATA_ERROR,
    error
  };
};

const data = Array(20)
  .fill(0)
  .map((el, idx) => {
    return {
      id: idx,
      title: `hola${idx * Math.random()}`,
      message: `diocane${idx * Math.random()}`
    };
  });

export const getData = () => {
  return function(dispatch: any) {
    dispatch(dataLoaded(data));
  };
};

/*
export const getData = () => {
  return function (dispatch) {
    service(get)(endpoint)
      .then(data => {
        dispatch(dataLoaded(data))
      )}
      .catch(error => {
        dispatch(dataLoadingError(error))
      })
  }
}
*/
