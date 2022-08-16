/* eslint-disable no-unused-vars */
import React from "react"
import {useEffect} from 'react'
import {nanoid} from "nanoid"
import NotesList from './components/NotesList'
import Search from './components/Search'
import Header from "./components/Header"


const App = () => {
  const[notes, setNotes] = React.useState([
    {
      id: nanoid(),
      text: 'This is my first note!',
      date : '15/04/22'
    },
    {
      id: nanoid(),
      text: 'This is my second note!',
      date : '15/04/22'
    },
    {
      id: nanoid(),
      text: 'This is my third note!',
      date : '15/04/22'
    }
  ])

  const[searchText, setSearchText] = React.useState('')

  const[darkMode, setDarkMode] = React.useState(false);

  // This will retrieve notes
  
  // useEffect (() => {

  //   // Whenever have to retrieve, we have to parse the data into Javascript object
  //     const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data')
  //     );

  //     // Check if it received any notes from local storage and if it did
  //     if (savedNotes) {
  //     console.log (savedNotes) 
  //     setNotes(savedNotes)
  //     }
  // }, [])

  // This will store in local storage anytime the notes change

  // useEffect(() => {

  //   // 'react-notes-app-data' is the KEY . KEY is the string which will be used to retrieve the notes later
  //   localStorage.setItem('react-notes-app-data',
  //     JSON.stringify(notes)
  //   );
  //   // console.log(notes)
  // } , [notes]);
 
  const addNote = (text) =>{
    const date = new Date();
    const newNote = {
      id:nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    // Adds the new note along with the previous notes
    // We do this as it's bad to mutate state in react
    // This updates the new array instead of updating old array
    const newNotes = [...notes, newNote];
    // when the setNotes is ChannelSplitterNode, this causes components to re-render and the lists updates with the new data
    setNotes(newNotes);
  };

  const deleteNote =(id) => {
    const newNotes=notes.filter((note) => note.id!==id);
    setNotes(newNotes);
  }

  return (
    // If darkMode==true then add dark-mode to the string
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className =  "container">
        <Header handleToggleDarkMode={setDarkMode}/>
        <Search handleSearchNote={setSearchText}/>
        <NotesList 
          notes={notes.filter((note) => 
            note.text.toLowerCase().includes(searchText))} 
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      
      </div>
    </div>
  )
};

export default App;
