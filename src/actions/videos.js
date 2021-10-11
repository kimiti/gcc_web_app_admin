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
  (selectedFiles, videoTitle) => async (dispatch, getState, getFirebase) => {
    const firebase = getFirebase();

    const storageRef = firebase.storage().ref();
    const fileRef = await storageRef
      .child("videos/" + selectedFiles.name)
      .put(selectedFiles);
    const downloadUrl = await fileRef.ref.getDownloadURL();
    console.log(downloadUrl);

    const docRef = await firebase.firestore().collection("videos").add({
      videoTitle: selectedFiles.name,
      videoUrl: downloadUrl,
    });
    console.log("Document written with ID: ", docRef.id);
  };
