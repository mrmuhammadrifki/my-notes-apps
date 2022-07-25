import React from "react";

class NoteInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: '',
            maxChar: 50,
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        const limit = 50;
        const titleInputUser = event.target.value.slice(0, limit);
        const titleInputUserLength = titleInputUser.length;

        this.setState(() => {
            return {
                title: titleInputUser,
                maxChar: limit - titleInputUserLength
            };  
        });
    }

    onBodyChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value,
            };
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
        this.state.title = "";
        this.state.body = "";
    }

   
    render() {
        return(
            <div className="note-input">
                <h2>Buat catatan</h2>
                <form onSubmit={this.onSubmitEventHandler}>
                    <p className="note-input__title__char-limit">
                        Sisa karakter: <span>{this.state.maxChar}</span>
                    </p>
                    <input 
                    className="note-input__title" 
                    type="text" 
                    placeholder="Ini adalah judul ..."
                    required
                    value={this.state.title}
                    onChange={this.onTitleChangeEventHandler}
                    onInput={this.onInputChangeHandler}
                    />
                    <textarea 
                    className="note-input__body" 
                    type="text" 
                    placeholder="Tuliskan catatanmu di sini ..." 
                    required
                    value={this.state.body}
                    onChange={this.onBodyChangeEventHandler}
                    >
                    </textarea>
                    <button type="submit"><i className="fa-solid fa-square-plus"></i></button>
                </form>
            </div>
        );
    }
}

export default NoteInput;