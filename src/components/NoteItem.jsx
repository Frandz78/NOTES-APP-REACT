import React from "react";
import NoteItemBody from "./NoteItemBody";
import NoteItemAction from "./NoteItemAction";
import ArchivedItemAction from "./ArchivedItemAction";

function NoteItem({ title, body, createdAt, color, id, onDelete, onArchived, isArchived, onUndo, onEdit, onDetail }) {
  return (
    <div className="note-item" style={{ backgroundColor: color }}>
      <NoteItemBody title={title} body={body} createdAt={createdAt} />
      {!isArchived ? <NoteItemAction id={id} onDelete={onDelete} onArchived={onArchived} onEdit={onEdit} onDetail={onDetail} /> : <ArchivedItemAction id={id} onDelete={onDelete} onUndo={onUndo} onEdit={onEdit} onDetail={onDetail} />}
    </div>
  );
}

export default NoteItem;
