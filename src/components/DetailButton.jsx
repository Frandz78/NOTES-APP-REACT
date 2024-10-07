import React from "react";

function DetailButton({ id, onDetail }) {
  return (
    <button className="note-item_detail-button" onClick={() => onDetail(id)}>
      <span className="material-symbols-outlined">quick_reference_all</span>
    </button>
  );
}

export default DetailButton;
