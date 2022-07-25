import EmptyMessage from "./EmptyMessage";
import NoteInput from "./NoteInput";
import NotesList from "./NotesList";

function NotesBody({ notes, searchedNotes, searchedTitle, onDelete, addNote, onArchive, showDate }) {
    let activeNotes = null;
    let archivedNotes = null;
    
    if (searchedTitle.length > 0) {
        activeNotes = searchedNotes.filter((note) => note.archived === false);
        archivedNotes = searchedNotes.filter((note) => note.archived === true);
      } else {
        activeNotes = notes.filter((note) => note.archived === false);
        archivedNotes = notes.filter((note) => note.archived === true);
    }
    
    return (
      <div className='note-app__body'>
        <NoteInput addNote={addNote} />
        <h2>Catatan Aktif</h2>
        {activeNotes.length > 0 ? <NotesList notes={activeNotes} onDelete={onDelete} onArchive={onArchive} showDate={showDate} /> : <EmptyMessage />}
        <h2>Arsip</h2>
        {archivedNotes.length > 0 ? <NotesList notes={archivedNotes} onDelete={onDelete} onArchive={onArchive} showDate={showDate} /> : <EmptyMessage />}
      </div>
    );
  }

  export default NotesBody;