import React from "react";

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "d-block" : "d-none";

  return (
    <div className={showHideClassName}>
      <div className="modal-container">
        {children}
        <p className="modal-close" onClick={handleClose}>
          close
        </p>
      </div>
    </div>
  );
};

export default Modal;
