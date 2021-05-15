import React from "react";
import { Link } from "react-router-dom";

function FoldersBreadcrumb({ path, currentFolder }) {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb align-items-center">
        <i
          className="fas fa-chevron-right fa-sm"
          style={{ marginRight: "5px" }}
        ></i>
        {path.map((item) => (
          <li key={item.id} className="breadcrumb-item" aria-current="page">
            <Link
              to={item.id ? `/folder/${item.id}` : `/`}
              className="text-decoration-none text-info"
            >
              {item.name}
            </Link>
          </li>
        ))}
        {currentFolder.id && (
          <li
            key={currentFolder.id}
            className="breadcrumb-item active"
            aria-current="page"
          >
            {currentFolder.name}
          </li>
        )}
      </ol>
    </nav>
  );
}

export default FoldersBreadcrumb;
