import { GET_VIDEOS, UPLOAD_PROGRESS } from "../actions/types";

const initState = {
  uploadProgress: null,
  videos: []
};

const videoReducer = (state = initState, action) => {

  const { type, payload } = action;

  switch (type) {
    case GET_VIDEOS:
      return {
        ...state,
        videos: payload,
      };
    case UPLOAD_PROGRESS:
      return {
        ...state,
        uploadProgress: payload,
      };

    default:
      return state;
  }
};

export default videoReducer;
