import "../Styles/Header.css";

export default function Header({ handleClick, isDarkMode }) {
  return (
    <div className="header">
      <h1>ToDoList</h1>
      <nav className="navbar">
        <ul>
          <li>Day</li>
          <li>Week</li>
        </ul>
      </nav>
      <label className="theme-toggle">
        <input type="checkbox" checked={isDarkMode} onChange={handleClick} />
        <span className="slider"></span>
      </label>
    </div>
  );
}
