import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import { NoteProvider } from "./context/NoteContext";

export default function App() {
  return (
    <div className="bg-zinc-900 h-screen text-white flex items-center justify-center">
      <div className="bg-green-900 p-4 w-1/4">
        <h1 className="text-3xl font-bold text-center block my-2">Notes</h1>
        <NoteProvider>
          <NoteForm />
          <NoteList />
        </NoteProvider>
      </div>
    </div>
  );
}
