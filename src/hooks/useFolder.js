import { useEffect, useState } from "react";
import { database } from "../firebase";
import { useAuth } from "../contexts/AuthContext";

export const ROOT_FOLDER = { name: "Root", id: null, parentId: null };

function useFolder(folderId = null) {
  const { currentUser } = useAuth();
  const [currentFolder, setCurrentFolder] = useState(null);
  const [childFolders, setChildFolders] = useState(null);
  const [childFiles, setChildFiles] = useState(null);
  const [path, setPath] = useState([ROOT_FOLDER]);

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
  }, [folderId, currentUser]);

  //Update path
  useEffect(() => {
    if (folderId) {
      if (currentFolder) {
        // if(path.find(item=>item.id===currentFolder.id))
        let index;
        const newPath = [...path];
        if (
          (index = path.findIndex((item) => item.id === currentFolder.id)) !==
          -1
        ) {
          newPath.length = index + 1;
          setPath(newPath);
        } else {
          let { name, id } = currentFolder;
          newPath.push({ name, id });
          setPath(newPath);
        }
      }
    } else {
      setPath([ROOT_FOLDER]);
    }
  }, [folderId, currentFolder]);

  return { folderId, currentFolder, childFolders, path };
}

export default useFolder;
