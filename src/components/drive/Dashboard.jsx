import React from "react";
import { useParams } from "react-router";
import useFolder from "../../hooks/useFolder";
import AddNewFileButton from "./AddNewFileButton";
import AddNewFolderButton from "./AddNewFolderButton";
import DisplayChildFolders from "./DisplayChildFolders";
import FoldersBreadcrumb from "./FoldersBreadcrumb";

function Dashboard() {
  const { id: folderId } = useParams();
  const { currentFolder, childFolders, path } = useFolder(folderId);
  // console.log("path: ", path);

  return (
    <div>
      <div className="d-flex align-items-center justify-content-between my-1">
        <div className="pt-3">
          {path && <FoldersBreadcrumb path={path} folderId={folderId} />}
        </div>
        <div>
          <AddNewFileButton currentFolder={currentFolder} />
          <AddNewFolderButton currentFolder={currentFolder} />
        </div>
      </div>
      <div className="d-flex flex-wrap mt-3">
        {childFolders && <DisplayChildFolders folders={childFolders} />}
      </div>
    </div>
  );
}

export default Dashboard;
