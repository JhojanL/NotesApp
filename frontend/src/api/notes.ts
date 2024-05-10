import { CreateNote, UpdateNote } from "../interfaces/note.interface";

const API = "http://localhost:3000/api";

export const createNoteRequest = (note: CreateNote) =>
  fetch(`${API}/notes`, {
    method: "POST",
    body: JSON.stringify(note),
    headers: {
      "Content-Type": "application/json",
    },
  });

export const getNoteRequest = () => fetch(`${API}/notes`);

export const deleteNoteRequest = async (id: string) =>
  fetch(`${API}/notes/${id}`, { method: "DELETE" });

export const updateNoteRequest = async (id: string, note: UpdateNote) => {
  return fetch(`${API}/notes/${id}`, {
    method: "PUT",
    body: JSON.stringify(note),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

