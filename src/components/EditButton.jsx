import React from "react";

function EditButton({ id, onEdit }) {
  return (
    <button className="note-item_edit-button" onClick={() => onEdit(id)}>
      <span className="material-symbols-outlined">edit_note</span>
    </button>
  );
}

export default EditButton;
