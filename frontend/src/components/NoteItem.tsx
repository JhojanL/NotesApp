import { useState } from "react";
import { useNotes } from "../context/useNotes";
import { Note } from "../interfaces/note.interface";
import {
  IoCheckmarkCircleOutline,
  IoCheckmarkCircle,
  IoTrash,
} from "react-icons/io5";
import { MdOutlineEditNote } from "react-icons/md";

interface Props {
  note: Note;
}

export default function NoteItem({ note: initialNote }: Props) {
  const { deleteNote, updateNote } = useNotes();

  const [note, setNote] = useState(initialNote);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNote({ ...note, [event.target.name]: event.target.value });
  };

  return (
    <div
      key={note._id}
      className="bg-green-950 p-2 my-2 flex justify-center hover:bg-zinc-900 hover:cursor-pointer gap-x-2"
    >
      <div>
        <input
          name="title"
          value={note.title}
          onChange={handleInputChange}
          className="font-bold bg-transparent"
        />
        <textarea
          name="description"
          value={note.description}
          onChange={handleInputChange}
          className="text-slate-400 bg-transparent w-full"
        ></textarea>
      </div>
      <div className="flex gap-x-2">
        <button onClick={() => updateNote(note._id, { active: !note.active })}>
          {note.active ? (
            <IoCheckmarkCircleOutline className="hover:text-green-500" />
          ) : (
            <IoCheckmarkCircle className="text-gray-400 hover:text-gray-200" />
          )}
        </button>
        <button
          onClick={() => {
            updateNote(note._id, note);
          }}
        >
          <MdOutlineEditNote className="hover:text-blue-500" />
        </button>
        <button
          onClick={() => {
            if (!window.confirm("Are you sure you want to delete it?")) return;
            deleteNote(note._id);
          }}
        >
          <IoTrash className="hover:text-red-500" />
        </button>
      </div>
    </div>
  );
}
