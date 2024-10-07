import React from "react";
import CloseButton from "./CLoseButton";

function DetailNotes({ notes, onClose }) {
  console.log(notes);
  if (!notes) {
    return <div>Data tidak ditemukan.</div>;
  }
  return (
    <div className="detail-note">
      <CloseButton onClose={onClose} />

      <div className="detail-note_content" style={{ backgroundColor: notes.color }}>
        <h3 className="detail-note_title">{notes.title}</h3>
        <p className="detail-note_date">{new Date(notes.createdAt).toLocaleDateString()}</p>
        <div className="detail-note_body-container">
          <p className="detail-note_body">{notes.body}</p>
        </div>
      </div>
    </div>
  );
}

export default DetailNotes;
