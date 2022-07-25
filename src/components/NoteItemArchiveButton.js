import React from 'react';


function NoteItemArchiveButton({ id, onArchive, isArchived }) {
    return <button className='note-item__archive-button' onClick={() => onArchive(id)}>{isArchived ? <i className="fa-solid fa-arrow-rotate-left"></i> : <i className="fa-solid fa-file-arrow-down"></i>}</button>;
}


export default NoteItemArchiveButton;