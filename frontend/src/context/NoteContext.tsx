import { createContext, useEffect, useState } from "react";
import {
  getNoteRequest,
  createNoteRequest,
  deleteNoteRequest,
  updateNoteRequest,
} from "../api/notes";
import { Note, CreateNote, UpdateNote } from "../interfaces/note.interface";

interface NoteContextValue {
  notes: Note[];
  createNote: (note: CreateNote) => Promise<void>;
  deleteNote: (id: string) => Promise<void>;
  updateNote: (id: string, note: UpdateNote) => Promise<void>;
}

export const NoteContext = createContext<NoteContextValue>({
  notes: [],
  createNote: async () => {},
  deleteNote: async () => {},
  updateNote: async () => {},
});

interface Props {
  children: React.ReactNode;
}

export const NoteProvider: React.FC<Props> = ({ children }) => {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    getNoteRequest()
      .then((response) => response.json())
      .then((data) => setNotes(data));
  }, []);

  const createNote = async (note: CreateNote) => {
    console.log(note);
    const res = await createNoteRequest(note);
    const data = await res.json();
    setNotes([...notes, data]);
  };

  const deleteNote = async (id: string) => {
    const res = await deleteNoteRequest(id);
    if (res.status === 204) {
      setNotes(notes.filter((note) => note._id !== id));
    }
  };

  const updateNote = async (id: string, note: UpdateNote) => {
    const res = await updateNoteRequest(id, note);
    const data = await res.json();
    console.log(data);
    setNotes(
      notes.map((note) => (note._id === id ? { ...note, ...data } : note))
    );
  };

  return (
    <NoteContext.Provider value={{ notes, createNote, deleteNote, updateNote }}>
      {children}
    </NoteContext.Provider>
  );
};
