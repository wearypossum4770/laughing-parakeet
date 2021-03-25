import "./App.css";
// import Signup from "./components/signup/Signup";
import Note from "./components/notes/Note";
export function App() {
  return (
    <div>
      {/* <Signup /> */}
      <Note />
      <footer className="w3-container w3-bottom w3-theme w3-margin-top">
        <h3>Footer</h3>
      </footer>
    </div>
  );
}
