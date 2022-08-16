import Note from "./Note";
import AddNote from "./AddNote";

const NotesList = ({notes, handleAddNote, handleDeleteNote}) => {
    return (
        <div className ='notes-list'>
            {/* In React, the map method is used to traverse and display a list of similar objects of a component. A map is not a feature of React. 
                Instead, it is the standard JavaScript function that could be called on an array. 
                The map() method creates a new array by calling a provided function on every element in the calling array. */}
            {notes.map((note)=> (
                <Note 
                    id={note.id} 
                    text={note.text} 
                    date={note.date} 
                    handleDeleteNote={handleDeleteNote}
                />
            ))}
            <AddNote handleAddNote={handleAddNote}/>
        </div>
    );
};

export default NotesList;