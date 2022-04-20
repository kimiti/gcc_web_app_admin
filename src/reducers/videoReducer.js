import { GET_VIDEOS } from "../actions/types";

const initState = {
  uploadProgress: null,
  videos: []
};

const videoReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_VIDEOS:
      console.log("get videos reducer");
      // console.log(action.data);
      return {
        ...state,
        videos: action.data,
      };
    case "UPLOAD_PROGRESS":
      console.log("upload progress reducer");
      console.log(action.progress);
      return {
        ...state,
        uploadProgress: action.progress,
      };

    default:
      return state;
  }
};

export default videoReducer;
