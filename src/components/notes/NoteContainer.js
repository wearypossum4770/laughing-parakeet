/** @format */

import { useState } from "react";
import NoteWidget from "./NoteWidget";
export default function NoteContainer() {
  const [note, setNote] = useState();
  return <NoteWidget note={note} setNote={setNote} />;
}
