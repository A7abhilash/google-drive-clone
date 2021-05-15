import React from "react";
import { Link } from "react-router-dom";

function FoldersBreadcrumb({ path }) {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb align-items-center">
        <i
          className="fas fa-chevron-right fa-sm"
          style={{ marginRight: "5px" }}
        ></i>
        {path.map((item, index) =>
          index === path.length - 1 ? (
            <li
              key={item.id}
              className="breadcrumb-item active"
              aria-current="page"
            >
              {item.name}
            </li>
          ) : (
            <li key={item.id} className="breadcrumb-item" aria-current="page">
              <Link
                to={item.id ? `/folder/${item.id}` : `/`}
                className="text-decoration-none text-info"
              >
                {item.name}
              </Link>
            </li>
          )
        )}
      </ol>
    </nav>
  );
}

export default FoldersBreadcrumb;
