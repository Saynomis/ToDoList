import "./Styles/App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { useState, useEffect } from "react";

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
      <Footer />
    </div>
  );
}

export default App;
