import React from "react";
import NoteItem from "./NoteItem";

function NotesList({ notes, onDelete, onArchived, onEdit, onDetail }) {
  console.log("Notes: ", notes);
  return (
    <div className="notes-list" id="notesList">
      {notes.map((note) => (
        <NoteItem key={note.id} {...note} id={note.id} onDelete={onDelete} onArchived={onArchived} onEdit={onEdit} onDetail={onDetail} />
      ))}
    </div>
  );
}

export default NotesList;
