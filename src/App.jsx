import { useState, useEffect } from "react";
import "./Styles/App.css";
import Header from "./Components/Header";
import CreateArea from "./Components/CreateArea";
import Note from "./Components/Note";
import Footer from "./Components/Footer";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = isDarkMode ? "dark-mode" : "light-mode";
  }, [isDarkMode]);

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

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
    const newNote = { ...note, id: Date.now() };
    setNotes((prevNotes) => [...prevNotes, newNote]);
    setNote({
      title: "",
      description: "",
    });
  }

  function handleDelete(id) {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
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
        <CreateArea notes={notes} handleDelete={handleDelete} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
