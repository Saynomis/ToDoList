import { useState } from "react";
import "../Styles/Note.css";
import { FaPlus } from "react-icons/fa";

export default function Note() {
  const [note, setNote] = useState({
    title: "",
    description: "",
  });

  const [notes, setNotes] = useState([]);

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setNotes((prevNotes) => [...prevNotes, note]);
    setNote({
      title: "",
      description: "",
    });
  }

  return (
    <div className="note-container">
      <form className="note" action="" onSubmit={handleSubmit}>
        <input
          className="title"
          value={note.title}
          onChange={handleChange}
          type="text"
          placeholder="Title"
          name="title"
        />
        <textarea
          className="description"
          onChange={handleChange}
          type="text"
          placeholder="Description"
          value={note.description}
          name="description"
        />
        <button type="submit" className="btn">
          <FaPlus />
        </button>
      </form>
      <div>
        {notes.map((note, index) => (
          <div key={index}>
            <h1>{note.title}</h1>
            <h2>{note.description}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
