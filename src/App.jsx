import { useState, useEffect } from "react";
import "./Styles/App.css";
import Header from "./Components/Header";
import CreateArea from "./Components/CreateArea";
import Note from "./Components/Note";
import Footer from "./Components/Footer";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    document.body.className = isDarkMode ? "dark-mode" : "light-mode";
  }, [isDarkMode]);

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newNote = { ...note, id: Date.now() };
    if (note.title.trim().length && note.description.trim().length > 1) {
      setNotes((prevNotes) => [...prevNotes, newNote]);
    }
    setNote({
      title: "",
      description: "",
    });
  }

  function handleDelete(id) {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  }

  function handleLineTrough(id) {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id ? { ...note, lineTrough: !note.lineTrough } : note
      )
    );
  }

  return (
    <div className="app-container">
      <Header handleClick={handleThemeToggle} isDarkMode={isDarkMode} />
      <main className="main-content">
        <Note
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          title={note.title}
          description={note.description}
        />
        <CreateArea
          notes={notes}
          handleLineTrough={handleLineTrough}
          handleDelete={handleDelete}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
