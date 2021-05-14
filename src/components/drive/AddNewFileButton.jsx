import React from "react";

function AddNewFileButton() {
  const handleUpload = () => {};

  return (
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
  );
}

export default AddNewFileButton;
