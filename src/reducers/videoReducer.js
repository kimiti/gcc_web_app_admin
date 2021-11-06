const initState = {
  uploadProgress: null,
};

const videoReducer = (state = initState, action) => {
  switch (action.type) {
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
