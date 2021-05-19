import React from "react";
import { useParams } from "react-router";
import useFolder from "../../hooks/useFolder";
import AddNewFileButton from "./AddNewFileButton";
import AddNewFolderButton from "./AddNewFolderButton";
import DisplayChildFolders from "./DisplayChildFolders";
import DisplayChildFiles from "./DisplayChildFiles";
import FoldersBreadcrumb from "./FoldersBreadcrumb";

function Dashboard() {
  const { id: folderId } = useParams();
  const { currentFolder, childFolders, childFiles } = useFolder(folderId);
  // console.log("childFiles: ", childFiles);

  return (
    <div>
      <div className="d-flex align-items-center justify-content-between my-1">
        <div className="pt-3">
          {currentFolder && (
            <FoldersBreadcrumb
              path={currentFolder.path}
              currentFolder={currentFolder}
            />
          )}
        </div>
        <div>
          <AddNewFileButton currentFolder={currentFolder} />
          <AddNewFolderButton currentFolder={currentFolder} />
        </div>
      </div>
      <div className="d-flex flex-wrap mt-3">
        {childFolders && <DisplayChildFolders folders={childFolders} />}
      </div>
      {childFolders?.length > 0 && childFiles?.length > 0 && <hr />}
      <div className="d-flex flex-wrap mt-3">
        {childFiles && <DisplayChildFiles files={childFiles} />}
      </div>
    </div>
  );
}

export default Dashboard;
