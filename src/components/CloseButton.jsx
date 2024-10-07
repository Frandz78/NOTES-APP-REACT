import React from "react";

function CloseButton({ onClose }) {
  return (
    <button className="close-btn" onClick={onClose}>
      <span className="material-symbols-outlined">close</span>
    </button>
  );
}

export default CloseButton;
