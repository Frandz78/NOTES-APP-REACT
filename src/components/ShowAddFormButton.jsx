import React from "react";

function ShowAddFormButton({ showForm }) {
  return (
    <button type="button" className="note-input_show-form-button" onClick={showForm}>
      <i className="fa-solid fa-plus plus-icons"></i> Tambah Catatan
    </button>
  );
}

export default ShowAddFormButton;
