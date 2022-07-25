import React from 'react';


function NoteItemDeleteButton({ id, onDelete }) {
    return <button className='note-item__delete-button' onClick={() => onDelete(id)}><i className="fa-solid fa-trash-can"></i></button>
}

export default NoteItemDeleteButton;