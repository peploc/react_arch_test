export const GET_NOTIFICATION = 'GET_NOTIFICATION'
export const CLEAR_NOTIFICATION = 'CLEAR_NOTIFICATION'


export const returnNotification = (msg: string, type: string, status: string, id?: any) => {
    return {
      type: GET_NOTIFICATION,
      payload: { msg, type, status, id }
    };
  };

  export const clearNotification = () => {
    return {
      type: CLEAR_NOTIFICATION
    };
  };