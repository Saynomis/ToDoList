import "../Styles/CreateArea.css";
import { MdDelete } from "react-icons/md";

export default function CreateArea({ notes, handleDelete }) {
  return (
    <div className="create-area-container">
      {notes.map((note, index) => (
        <div className="create-area" key={index}>
          <h1>{note.title}</h1>
          <p>{note.description}</p>
          <button onClick={() => handleDelete(note.id)} className="del-btn">
            <MdDelete />
          </button>
        </div>
      ))}
    </div>
  );
}
