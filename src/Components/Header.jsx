import "../Styles/Header.css";

export default function Header({ handleClick, isDarkMode }) {
  return (
    <div className="header">
      <h1>ToDoList</h1>
      <label className="theme-toggle">
        <input type="checkbox" checked={isDarkMode} onChange={handleClick} />
        <span className="slider"></span>
      </label>
    </div>
  );
}
