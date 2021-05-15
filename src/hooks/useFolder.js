import { useEffect, useState } from "react";
import { database } from "../firebase";
import { useAuth } from "../contexts/AuthContext";

export const ROOT_FOLDER = {
  name: "Root",
  id: null,
  parentId: null,
  path: [{ name: "Root", id: null }],
};

function useFolder(folderId = null) {
  const { currentUser } = useAuth();
  const [currentFolder, setCurrentFolder] = useState(null);
  const [childFolders, setChildFolders] = useState(null);
  const [childFiles, setChildFiles] = useState(null);

  // Get current folder details
  useEffect(() => {
    if (currentUser) {
      console.log("folder id: ", folderId);
      if (folderId) {
        database
          .folders(currentUser.uid)
          .doc(folderId)
          .get()
          .then((doc) => {
            // console.log(doc);
            setCurrentFolder(database.formatDocument(doc));
          });
      } else {
        setCurrentFolder(ROOT_FOLDER);
      }
    }
  }, [folderId, currentUser]);

  // Get all the child folders in current folder
  useEffect(() => {
    if (currentUser) {
      database
        .folders(currentUser.uid)
        .where("parentId", "==", folderId)
        // .orderBy("createdAt")
        .onSnapshot((snapshot) => {
          setChildFolders(
            snapshot.docs.map((doc) => database.formatDocument(doc))
          );
        });
    }
  }, [folderId, currentFolder, currentUser]);

  return { folderId, currentFolder, childFolders };
}

export default useFolder;
