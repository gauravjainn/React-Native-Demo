import {LIKE_VIDEO, SET_VIDEO_DATA} from '../Types';

const initialState = {
  preLoader: false,
  videoData: [],
  next_page_url: '',
};
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_VIDEO_DATA: {
      let videoData = Object.assign([], state.videoData);
      const data = videoData.filter(function (el) {
        el.id == action.payload.data.id;
      });
      if (data !== []) {
        action.payload.data.forEach(element => {
          element.likeCount = 0;
        });

        videoData.push(...action.payload.data);
        console.log(videoData);
        return {
          ...state,
          videoData: videoData,
          next_page_url: action.payload.next_page_url,
        };
      }
    }
    case LIKE_VIDEO: {
      let videoData = Object.assign([], state.videoData);
      videoData[action.payload].likeCount == 1
        ? (videoData[action.payload].likeCount = 0)
        : (videoData[action.payload].likeCount = 1);
      return {...state, videoData: videoData};
    }
    default:
      return state;
  }
}
