import React from "react";
import NoteItemContent from "./NoteItemContent";
import NoteItemAction from "./NoteItemAction";

function NoteItem({ title, createdAt, body, showDate, id, isArchived, onDelete, onArchive }) {
    return(
        <div className="note-item">
            <NoteItemContent title={title} createdAt={showDate(createdAt)} body={body} />
            <NoteItemAction id={id} onDelete={onDelete} onArchive={onArchive} isArchived={isArchived} />
        </div>
    );
}

export default NoteItem;