import { v4 as uuidv4 } from "uuid";
import { GET_VIDEOS } from "./types";


// Upload Video
export const uploadVideo =
  (selectedFiles, videoTitle) => (dispatch, getState, getFirebase) => {
    const firebase = getFirebase();
    const storageRef = firebase.storage().ref();
    const fileRef = storageRef
      .child(`videos/${uuidv4()}/${selectedFiles.name}`)
      .put(selectedFiles);

    fileRef.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        var progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );

        dispatch({ type: "UPLOAD_PROGRESS", payload: progress });
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      async () => {
        const downloadUrl = await fileRef.snapshot.ref.getDownloadURL();


        await firebase.firestore().collection("videos").add({
          videoTitle: videoTitle,
          videoUrl: downloadUrl,
        });

      }
    );
  };


// Upload Video
export const getVideo = () => (dispatch, getState, getFirebase) => {
  const firebase = getFirebase();

  firebase.firestore().collection("videos").get().then((querySnapshot) => {
    const data = [];
    querySnapshot.forEach((doc) => {
      // console.log(doc.data());
      // data.push(doc.data())
      data.push({ videoTitle: doc.data().videoTitle, videoUrl: doc.data().videoUrl })
    });
    dispatch({ type: GET_VIDEOS, payload: data });
  })

}