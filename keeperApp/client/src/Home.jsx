import React, { useState } from 'react';
import Note from './Note';

function Home() {
  const [notes, setNotes] = useState([]);
  const [noteTitle, setNoteTitle] = useState('');
  const [noteContent, setNoteContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTitle = noteTitle.trim() === '' ? 'No Tittle' : noteTitle.trim();
    const newContent = noteContent.trim() === '' ? 'No Content' : noteContent.trim();
  
    const newNote = {
      id: Date.now(),
      title: newTitle,
      content: newContent
    };
  
    setNotes([...notes, newNote]);
    setNoteTitle('');
    setNoteContent('');
  };
  

  const handleDelete = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  return (
    <main className="note-container">
      <form onSubmit={handleSubmit} >
       <div className='note'>
       <input
          type="text"
          placeholder=" Note Title"
          value={noteTitle}
          className='noteh1'
          onChange={(e) => setNoteTitle(e.target.value)}
        />
        <textarea
          placeholder=" Note Content"
          value={noteContent}
          rows={1}
          className='notep'
          onChange={(e) => setNoteContent(e.target.value)}
        ></textarea>
        
       </div>
       <button type="submit" id='submit-button'>+</button>
      </form>
      {notes.length > 0 ? (
        <ul className="note-list">
          {notes.map((note) => (
            <Note  key={note.id} note={note} onDelete={handleDelete} />
          ))}
        </ul>
      ) : ( <p></p>)}
    </main>
  );
}

export default Home;
