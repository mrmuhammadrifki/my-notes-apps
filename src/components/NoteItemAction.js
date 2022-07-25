import React from 'react';
import NoteItemDeleteButton from './NoteItemDeleteButton';
import NoteItemArchiveButton from './NoteItemArchiveButton';

function NoteItemAction({ id, onDelete, onArchive, isArchived }) {
    return(
        <div className='note-item__action'>
            <NoteItemDeleteButton id={id} onDelete={onDelete} />
            <NoteItemArchiveButton id={id} onArchive={onArchive} isArchived={isArchived} />
        </div>
    );
}

export default NoteItemAction;