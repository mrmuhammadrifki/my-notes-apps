import React from 'react';
import {getInitialData, showFormattedDate } from '../utils/data';
import NoteAppHeader from './NoteAppHeader';
import NotesBody from './NotesBody';

class NoteApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
            searchedNotes: [],
            searchTitle: '',
        }

        this.onDeletedHandler = this.onDeletedHandler.bind(this);
        this.onArchivedHandler = this.onArchivedHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onSearchChangeEventHandler = this.onSearchChangeEventHandler.bind(this);
        this.onSearchEventHandler = this.onSearchEventHandler.bind(this);
    }

    onSearchChangeEventHandler(event) {
        this.setState(() => {
          return {
            searchTitle: event.target.value,
          };
        });
        this.onSearchEventHandler(event.target.value);
    }
    
    onSearchEventHandler(searchedTitle) {
        let searchedNotes = this.state.notes.filter((note) => note.title.toLowerCase().includes(searchedTitle.toLocaleLowerCase()));
        if (this.state.searchTitle.length >= 0) {
          this.setState({ searchedNotes: null });
          this.setState({ searchedNotes: searchedNotes });
        } else {
          this.setState({ searchedNotes: null });
          this.setState({ searchedNotes: this.state.notes });
        }
    }

    onDeletedHandler(id) {
        const updatedNotes = this.state.notes.filter(note => note.id !== id);
        this.setState(() => {
            return {
                notes: updatedNotes
            }
        });
    }

    onArchivedHandler(id) {
        const updatedNotes = this.state.notes.filter((note) => note.id === id).map((note) => note.archived = !note.archived);
        this.setState(() => {
            return {
                updatedNotes
            }
        });
    }

    onAddNoteHandler({ title, body }) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        createdAt: new Date(),
                        archived: false,
                    }
                ]
            }
        });
    }

    render() {
        return(
            <>
                <NoteAppHeader onSearchChange={this.onSearchChangeEventHandler} searchTitle={this.state.searchTitle} />
                <NotesBody notes={this.state.notes} onDelete={this.onDeletedHandler} onArchive={this.onArchivedHandler} addNote={this.onAddNoteHandler} showDate={showFormattedDate} searchedNotes={this.state.searchedNotes} searchedTitle={this.state.searchTitle} />
            </>
           
        );
    }
}

export default NoteApp;