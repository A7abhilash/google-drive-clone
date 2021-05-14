import React from "react";

function CenteredContainer({ children }) {
  return (
    <div
      className="d-flex align-items-center justify-content-center pt-5"
      style={{ height: "90vh" }}
    >
      {children}
    </div>
  );
}

export default CenteredContainer;
