const initialState = {
  preLoader: false,
  videoData: {},
};
export default function (state = initialState, action) {
  switch (action.type) {
    case 'PRE_LOADER': {
      return {...state, preLoader: action.payload.preLoader};
    }
    case 'SET_VIDEO_DATA': {
      return {
        ...state,
        videoData: action.payload,
      };
    }
    default:
      return state;
  }
}
