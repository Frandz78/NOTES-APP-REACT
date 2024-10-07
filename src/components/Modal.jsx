import React from "react";
import CloseButton from "./CLoseButton";

function Modal({ children, onClose }) {
  return (
    <div className="modal-overlay">
      <CloseButton onClose={onClose} />
      {children}
    </div>
  );
}

export default Modal;
