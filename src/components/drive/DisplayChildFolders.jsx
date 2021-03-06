import React from "react";
import { Link } from "react-router-dom";

function DisplayChildFolders({ folders }) {
  return folders.map((folder) => (
    <div key={folder.id} style={{ marginRight: "10px", maxWidth: "150px" }}>
      <Link
        to={`/folder/${folder.id}`}
        className="btn btn-sm btn-outline-dark text-truncate w-100"
      >
        <i className="fa fa-folder" style={{ marginRight: "5px" }}></i>
        {folder.name}
      </Link>
    </div>
  ));
}

export default DisplayChildFolders;
