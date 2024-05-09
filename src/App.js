import React, { useState } from 'react';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddNote = () => {
    if (inputValue.trim() !== '') {
      setNotes([...notes, inputValue]);
      setInputValue('');
    }
  };

  const handleDeleteNote = (index) => {
    const newNotes = [...notes];
    newNotes.splice(index, 1);
    setNotes(newNotes);
  };

  return (
    <div className="App">
      <h1>Simple Note App</h1>
      <div className="note-input">
        <input
          type="text"
          placeholder="Enter your note"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button onClick={handleAddNote}>Add Note</button>
      </div>
      <div className="note-list">
        {notes.map((note, index) => (
          <div className="note" key={index}>
            <p>{note}</p>
            <button onClick={() => handleDeleteNote(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
