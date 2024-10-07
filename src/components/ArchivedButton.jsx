import React from "react";

function ArchivedButton({ id, onArchived }) {
  return (
    <button className="note-item_archive-button" onClick={() => onArchived(id)}>
      <span className="material-symbols-outlined">archive</span>
    </button>
  );
}

export default ArchivedButton;
