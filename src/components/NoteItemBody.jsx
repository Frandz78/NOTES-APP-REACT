import React from "react";
// Data waktu sekarang
import { showFormattedDate } from "../utils";

function NoteItemBody({ title, body, createdAt }) {
  return (
    <div className="note-item_content">
      <h3 className="note-item_title">{title}</h3>
      <p className="note-item_date">{showFormattedDate(createdAt)}</p>
      <div className="note-item_body-container">
        <p className="note-item_body">{body}</p>
      </div>
    </div>
  );
}

export default NoteItemBody;
