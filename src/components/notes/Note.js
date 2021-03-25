import { useEffect, useState, useReducer } from "react";
import {
  initialState,
  getNoteIds,
  options,
  incrementFetch,
  reducer,
  setNoteId,
} from "./NoteContainer";
function Note() {
  const [noteObj, setNoteObj] = useState();
  const [notes, setNotes] = useState([]);
  const [state, dispatch] = useReducer(reducer, initialState);
  let handleChange = ({ target: { name, value } }) =>
    dispatch({ type: "CHANGE", payload: { [name]: value } });
  /**setNoteObj({
      ...noteObj,
      [name]: value,
    });*/
  let handleAdd = () => {
    dispatch({ type: "SHOW" });
    setNotes([...notes, { id: setNoteId(notes), ...noteObj }]);
    setNoteObj({});
  };

  useEffect(() => {
    let { updateBackend, initialFetch } = state;
    async function fetchData() {
      try {
        let request = await (
          await fetch("http://localhost:8000/", options)
        ).json();
        let response = request;
        dispatch({ type: "FETCH", payload: response });
      } catch (err) {
        console.log(err);
      }
    }
    async function postData() {
      let init = { ...options, method: "POST", body: JSON.stringify(notes) };
      try {
        const response = await fetch("http://localhost:8000/", init);
        if (response.ok) {
          dispatch({ type: "BACKEND_UPDATED" });
          return await response.json();
        }
      } catch (err) {
        console.log(err);
      }
    }
    if (notes.length > 0 && updateBackend) {
      postData();
    } else if (initialFetch) {
      fetchData();
    }
  }, [notes, state]);
  let { isVisible } = state;
  return (
    <div className="w-3 container">
      {isVisible ? (
        <div>
          <div>
            <input name="title" onChange={handleChange} autoFocus />
          </div>
          <div>
            <input name="content" onChange={handleChange} />
          </div>
          <div>
            <button type="button" onClick={handleAdd}>
              Save
            </button>
          </div>
        </div>
      ) : (
        <div>
          <button onClick={() => dispatch({ type: "SHOW" })}>Add Note</button>
        </div>
      )}
    </div>
  );
}
export default Note;
