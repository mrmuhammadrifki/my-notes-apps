import React from 'react';
import NoteItem from './NoteItem';


function NotesList({ notes, showDate, onDelete, onArchive}) {
        return(
            <div className='notes-list'>
                {notes.map(note => (
                    <NoteItem 
                    key={note.id} 
                    id={note.id}
                    isArchived={note.archived} 
                    {...note} 
                    showDate={showDate}
                    onDelete={onDelete}
                    onArchive={onArchive}
                    />
                ))}
            </div>
        );
}

export default NotesList;