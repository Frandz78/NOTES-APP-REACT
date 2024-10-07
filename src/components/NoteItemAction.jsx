import React from "react";
import DeleteButton from "./DeleteButton";
import ArchivedButton from "./ArchivedButton";
import EditButton from "./EditButton";
import DetailButton from "./DetailButton";

function NoteItemAction({ id, onDelete, onArchived, onEdit, onDetail }) {
  return (
    <div className="note-item_action">
      <DeleteButton id={id} onDelete={onDelete} />
      <ArchivedButton id={id} onArchived={onArchived} />
      <EditButton id={id} onEdit={onEdit} />
      <DetailButton id={id} onDetail={onDetail} />
    </div>
  );
}

export default NoteItemAction;
