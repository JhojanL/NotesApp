import { useState } from "react";
import NoteItem from "./NoteItem";
import { useNotes } from "../context/useNotes";

export default function NoteList() {
  const { notes } = useNotes();
  const [filter, setFilter] = useState("active"); // Add this line

  const filteredNotes = notes.filter(note => note.active === (filter === "active")); // Add this line

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => { // Add this function
    setFilter(event.target.value);
  };

  return (
    <div>
      <div className="flex gap-x-2 justify-center my-2">
        <label>
          <input
            type="radio"
            value="active"
            checked={filter === "active"}
            onChange={handleFilterChange}
          />
          Active
        </label>
        <label>
          <input
            type="radio"
            value="archived"
            checked={filter === "archived"}
            onChange={handleFilterChange}
          />
          Archived
        </label>
      </div>
      {filteredNotes.map((note) => (
        <NoteItem note={note} key={note._id} />
      ))}
    </div>
  );
}

