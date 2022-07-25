import React from "react";
import NoteSearch from "./NoteSearch";

function NoteAppHeader({ onSearchChange, searchTitle }) {
    return(
        <div className="note-app__header">
            <h1>Notes</h1>
            <NoteSearch onSearchChange={onSearchChange} searchTitle={searchTitle} />
        </div>
    )
}

export default NoteAppHeader;