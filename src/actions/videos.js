export function uploadVideo(video) {
  return (dispatch, getState, getFirebase) => {
    const filesPath = "uploadedFiles";
    const firebase = getFirebase();
    console.log(firebase);

    const storageRef = firebase.storage().ref();
    const fileRef = storageRef.child("videos");
    fileRef.put(video).then((snapshot) => {
      console.log("Uploaded a blob or file!");
    });
  };
}
