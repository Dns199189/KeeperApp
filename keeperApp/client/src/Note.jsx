import React, { useState } from 'react';

function Note({ note, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(note.title);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div className="notesubmit">
      {isEditing ? (
        <input
          type="text"
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
        />
      ) : (
        <h3>{note.title}</h3>
      )}
      <p>{note.content}</p>
      <div className="note-buttons">
        {isEditing ? (
          <button onClick={handleSave}>Save</button>
        ) : (
          <>
            <button onClick={() => onDelete(note.id)} id='deletebutton'>Delete</button>
          </>
        )}
      </div>
    </div>
  );
}

export default Note;
