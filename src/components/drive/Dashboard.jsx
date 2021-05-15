import React from "react";
import { useParams } from "react-router";
import useFolder from "../../hooks/useFolder";
import AddNewFileButton from "./AddNewFileButton";
import AddNewFolderButton from "./AddNewFolderButton";
import DisplayChildFolders from "./DisplayChildFolders";

function Dashboard() {
  const { id: folderId } = useParams();
  const { currentFolder, childFolders } = useFolder(folderId);
  // console.log("childFolders: ", childFolders);

  return (
    <div>
      <div className="d-flex align-items-center justify-content-between my-1">
        <div>
          <h2>Dashboard</h2>
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
