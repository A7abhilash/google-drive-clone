import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { database, storage } from "../../firebase";

function AddNewFileButton({ currentFolder }) {
  const { currentUser } = useAuth();
  const [status, setStatus] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(null);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    // console.log(file);
    try {
      const uploadTask = storage.ref().child(`/gd/${Date.now()}`).put(file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          var progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          //   console.log("Upload is " + progress + "% done");
          setUploadProgress(progress);
          switch (snapshot.state) {
            case "paused":
              setStatus("Upload is paused");
              break;
            case "running":
              setStatus("Upload is running");
              break;
            default:
              setStatus(snapshot.state);
          }
        },
        (error) => {
          alert(error.code);
        },
        () => {
          // Upload completed successfully, now we can get the download URL
          uploadTask.snapshot.ref.getDownloadURL().then(async (downloadURL) => {
            // console.log('File available at', downloadURL);
            setUploadProgress("Saving file to database...");
            let newFile = {
              name: file.name,
              url: downloadURL,
              parentId: currentFolder.id,
              createdAt: database.getCurrentTimestamp(),
            };
            await database.files(currentUser.uid).add(newFile);
            alert("Your file was uploaded successfully");
            setUploadProgress(null);
            setStatus(null);
          });
        }
      );
    } catch (error) {
      console.log(error);
      alert("Failed to upload your image!!");
      setStatus(null);
    }
  };

  return (
    <>
      <label
        className="btn btn-sm btn-outline-success"
        style={{ marginRight: "10px" }}
      >
        <input
          type="file"
          style={{
            position: "absolute",
            left: "-100vh",
            opacity: 0,
          }}
          onChange={handleUpload}
        />
        <i className="fas fa-file-plus fa-lg"></i>
      </label>
      {status !== null && (
        <div style={backgroundStyle}>
          <div style={innerView}>
            <h6 className="text-center">{status}</h6>
            <div className="progress">
              <div
                className="progress-bar progress-bar-striped bg-warning"
                role="progressbar"
                style={{ width: `${Math.floor(uploadProgress)}%` }}
                aria-valuenow={Math.floor(uploadProgress)}
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AddNewFileButton;

const backgroundStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#eee",
  opacity: 0.8,
};

const innerView = {
  backgroundColor: "white",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  height: "10vh",
  width: "30vh",
  top: 50,
  left: 50,
  paddingTop: 5,
  paddingLeft: 10,
  paddingRight: 10,
  borderRadius: 10,
};
