import { v4 as uuidv4 } from "uuid";

// export function uploadVideo(selectedFiles, videoTitle) {
//   return (dispatch, getState, getFirebase) => {
//     const firebase = getFirebase();
//     console.log(firebase);
//     const storageRef = firebase.storage().ref();
//     const fileRef = storageRef
//       .child("videos/" + selectedFiles.name)
//       .put(selectedFiles)
//       .then((snapshot) => {
//         console.log("Uploaded a blob or file!");
//         console.log(snapshot);

//         snapshot.ref.getDownloadURL().then((url) => {
//           console.log(url);
//         });
//       });

//     // storageRef
//   };
// }

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
        // console.log("Upload is " + progress + "% done");
        dispatch({ type: "UPLOAD_PROGRESS", progress });
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      async () => {
        const downloadUrl = await fileRef.snapshot.ref.getDownloadURL();
        // console.log(downloadUrl);

        await firebase.firestore().collection("videos").add({
          videoTitle: videoTitle,
          videoUrl: downloadUrl,
        });
        // console.log("Document written with ID: ", docRef.id);
      }
    );
  };
