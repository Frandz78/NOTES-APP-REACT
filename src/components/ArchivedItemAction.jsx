import React from "react";
import DeleteButton from "./DeleteButton";
import UndoButton from "./UndoButton";
import EditButton from "./EditButton";
import DetailButton from "./DetailButton";

function ArchivedItemAction({ id, onDelete, onUndo, onEdit, onDetail }) {
  return (
    <div className="archived-item_action">
      <DeleteButton id={id} onDelete={onDelete} />
      <UndoButton id={id} onUndo={onUndo} />
      <EditButton id={id} onEdit={onEdit} />
      <DetailButton id={id} onDetail={onDetail} />
    </div>
  );
}

export default ArchivedItemAction;
