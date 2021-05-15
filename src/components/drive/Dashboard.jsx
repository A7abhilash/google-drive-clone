import React from "react";
import { useParams } from "react-router";
import useFolder from "../../hooks/useFolder";
import AddNewFileButton from "./AddNewFileButton";
import AddNewFolderButton from "./AddNewFolderButton";

function Dashboard() {
  const { id: folderId } = useParams();
  const { currentFolder } = useFolder(folderId);
  console.log("Folder: ", currentFolder);

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
    </div>
  );
}

export default Dashboard;
