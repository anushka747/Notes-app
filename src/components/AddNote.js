import React from "react";

const AddNote = ({handleAddNote}) => {
    // The useState hook is used for storing variables that are part of your application's state and will change as the user interacts with your website.
    const[noteText, setNoteText] = React.useState('')
    const characterLimit = 200;
    const handleChange = (event) => {
        if(characterLimit - event.target.value.length >=0)
        // The State gets updated everytime the value of the textarea changes when user types
        setNoteText(event.target.value);

        // Value will be stored in the body on every keystroke
        // console.log(event.target.value)
    };
    const handleSaveClick =() => {
        if (noteText.trim().length>0){
            handleAddNote(noteText);
            setNoteText('');
        }
    }

    return (
        <div className ="note-new">
            <textarea
                rows='8'
                cols='35'
                placeholder='Type to add a note...'
                // The value attribute is used to set or get the value for the input field, selected, textarea.
                value={noteText}
                // The onChange event detects when the value of an input element changes.
                onChange={handleChange}
            ></textarea>
            <div className='note-footer'>
                <small>{characterLimit - noteText.length} Remaining</small>
                <button className="save" onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    );
};

export default AddNote;