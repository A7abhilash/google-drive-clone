import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { database } from "../../firebase";

function AddNewFolderButton({ currentFolder }) {
  const { currentUser } = useAuth();
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name) {
      try {
        let path = currentFolder.path;
        if (currentFolder.id !== null) {
          path.push({ name: currentFolder.name, id: currentFolder.id });
        }
        let newFolder = {
          name,
          parentId: currentFolder.id,
          path,
          createdAt: database.getCurrentTimestamp(),
        };
        await database.folders(currentUser.uid).add(newFolder);
        alert("New folder created.");
        setName("");
      } catch (error) {
        alert(error.message);
      }
    } else {
      alert("Empty field!!!");
    }
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-sm btn-outline-success"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        <i className="fas fa-folder-plus fa-lg"></i>
      </button>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                New Folder
              </h5>
              <button
                type="button"
                className="btn btn-sm close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="p-3">
              <button
                type="button"
                className="btn btn-sm btn-success"
                onClick={handleSubmit}
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddNewFolderButton;
