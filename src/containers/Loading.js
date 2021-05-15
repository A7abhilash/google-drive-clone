import React from "react";
import CenteredContainer from "./CenteredContainer";

function Loading() {
  return (
    <CenteredContainer>
      <div class="spinner-border text-secondary" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </CenteredContainer>
  );
}

export default Loading;
