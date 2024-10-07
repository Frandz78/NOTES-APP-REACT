import React from "react";

function DeleteButton({ id, onDelete }) {
  return (
    <>
      <button className="note-item_delete-button" onClick={() => onDelete(id)}>
        <span className="material-symbols-outlined">delete</span>
      </button>
    </>
  );
}

export default DeleteButton;
