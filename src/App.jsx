import { useState, useEffect } from "react";
import "./Styles/App.css";
import Header from "./Components/Header";
import Note from "./Components/Note";
import CreateArea from "./Components/CreateArea";
import Footer from "./Components/Footer";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = isDarkMode ? "dark-mode" : "light-mode";
  }, [isDarkMode]);

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  

  return (
    <div>
      <Header handleClick={handleThemeToggle} isDarkMode={isDarkMode} />
      <Note />
      <CreateArea />
      <Footer />
    </div>
  );
}

export default App;
