import React from "react";

function DisplayChildFolders({ files }) {
  return files.map((file) => (
    <div key={file.id} style={{ marginRight: "10px", maxWidth: "150px" }}>
      <a
        href={file.url}
        target="_blank"
        className="btn btn-sm btn-outline-dark text-truncate w-100 text-decoration-none"
      >
        <i className="fa fa-file" style={{ marginRight: "5px" }}></i>
        {file.name}
      </a>
    </div>
  ));
}

export default DisplayChildFolders;
