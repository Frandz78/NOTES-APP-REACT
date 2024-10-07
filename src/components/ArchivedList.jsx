import React from "react";
import NoteItem from "./NoteItem";

function ArchivedList({ notes, onDelete, onUndo, isArchived, onEdit, onDetail }) {
  console.log("Archived: ", notes);
  return (
    <div className="archived-list" id="archivedList">
      {notes.map((note) => (
        <NoteItem key={note.id} {...note} onDelete={onDelete} onUndo={onUndo} isArchived={isArchived} onEdit={onEdit} onDetail={onDetail} />
      ))}
    </div>
  );
}

export default ArchivedList;
