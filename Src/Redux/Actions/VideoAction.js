import {GET} from '../../Services/ResponseHelper';
import {SET_VIDEO_DATA} from '../Types';

const dispatchAction = (dispatch, actionType, data) => {
  dispatch({
    type: actionType,
    payload: data,
  });
};

const dispatchErrorAction = message => {
  alert(message);
};

export const getNewVideo = urlData => async dispatch => {
  const url = urlData + '&per_page=1&app=1&new=1';
  try {
    const data = await GET(url);
    if (data.data) {
      dispatchAction(dispatch, SET_VIDEO_DATA, data);
    } else {
      dispatchErrorAction(dispatch, 'Something went wrong!');
    }
  } catch (error) {
    console.log('--error', error);
    dispatchErrorAction('Something went wrong!');
  }
};
