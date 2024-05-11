import { ChangeEvent, FormEvent, useState } from "react";
import { useNotes } from "../context/useNotes";

export default function NoteForm() {
  const [note, setNote] = useState({
    title: "",
    description: "",
    active: true,
  });
  const { createNote } = useNotes();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createNote(note);
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          name="title"
          type="text"
          placeholder="Note Title"
          onChange={handleChange}
          className="border-2 border-green-700 p-2 rounded-lg bg-zinc-900 block w-full my-2"
        />
        <textarea
          name="description"
          rows={3}
          placeholder="Note Content"
          onChange={handleChange}
          className="border-2 border-green-700 p-2 rounded-lg bg-zinc-900 block w-full my-2"
        ></textarea>
        <label htmlFor="" className="inline-flex items-center gap-x-2">
          <input
            type="checkbox"
            onChange={() => setNote({ ...note, active: !note.active })}
            className="form-checkbox h-5 w-5 accent-green-600"
          />
          <span>Archived</span>
        </label>
        <button type="submit" className="bg-green-600 px-3 block py-2 w-full font-bold hover:bg-green-500">
          Save
        </button>
      </form>
    </div>
  );
}
