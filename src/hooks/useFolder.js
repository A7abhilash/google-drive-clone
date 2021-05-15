import { useEffect, useState } from "react";
import { database } from "../firebase";
import { useAuth } from "../contexts/AuthContext";

export const ROOT_FOLDER = { name: "Root", id: null, parentId: null };

function useFolder(folderId = null) {
  const { currentUser } = useAuth();
  const [currentFolder, setCurrentFolder] = useState(null);

  useEffect(() => {
    if (currentUser) {
      console.log("folder id: ", folderId);
      if (folderId) {
        database
          .folders(currentUser.uid)
          .get()
          .then((doc) => {
            setCurrentFolder(database.formatDocument(doc));
          });
      } else {
        setCurrentFolder(ROOT_FOLDER);
      }
    }
  }, [folderId, currentUser]);

  return { folderId, currentFolder };
}

export default useFolder;
