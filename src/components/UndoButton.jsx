import React from "react";

function UndoButton({ id, onUndo }) {
  return (
    <button className="note-item_undo-button" onClick={() => onUndo(id)}>
      <span className="material-symbols-outlined">unarchive</span>
    </button>
  );
}

export default UndoButton;
