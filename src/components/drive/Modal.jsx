import React from "react";

function Modal({ openModal, closeModal, type }) {
  return (
    openModal && (
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                New {type}
              </h5>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={closeModal}
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Create {type}
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default Modal;
