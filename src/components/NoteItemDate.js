import React from 'react';

function NoteItemDate({ createAt }) {
    return <p className='note-item__date'>{createAt}</p>;
}

export default NoteItemDate;