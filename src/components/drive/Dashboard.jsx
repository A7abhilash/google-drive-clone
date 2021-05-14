import React from "react";
import AddNewFileButton from "./AddNewFileButton";
import AddNewFolderButton from "./AddNewFolderButton";

function Dashboard() {
  return (
    <div>
      <div className="d-flex align-items-center justify-content-between my-1">
        <div>
          <h2>Dashboard</h2>
        </div>
        <div>
          <AddNewFileButton />
          <AddNewFolderButton />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
