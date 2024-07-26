import "../Styles/Note.css";
import { FaPlus } from "react-icons/fa";

export default function Note({
  handleChange,
  handleSubmit,
  title,
  description,
}) {
  return (
    <div className="note-container">
      <form className="note" action="" onSubmit={handleSubmit}>
        <input
          className="title"
          type="text"
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={title}
        />
        <textarea
          className="description"
          type="text"
          name="description"
          placeholder="Description"
          onChange={handleChange}
          value={description}
        />
        <button type="submit" className="btn">
          <FaPlus />
        </button>
      </form>
    </div>
  );
}
