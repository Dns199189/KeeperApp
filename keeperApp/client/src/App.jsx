import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Home from "./Home"
 function App(){
    const [notes,setnotes]=useState([]);
    function addNote(newNote){
        setnotes((prevNotes)=>{
            return [...prevNotes,newNote]
        });
    }
    return(
        <div>
            <Header/>
            <Home onAdd={addNote}/>
            {notes.map((noteItem,index)=>{
                return(
                    <Note key={1}
                     id={index}
                     title={noteItem.title}
                    content={noteItem.content}/>
                )

            })}
            <Footer/>
        </div>
    );
 }
 export default App;
