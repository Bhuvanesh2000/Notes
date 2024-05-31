import Icon from "./Icon";
import UpdateForm from "./UpdateForm";
import { useState } from "react";

export default function Update({ note }) {
  const [updateNote, setUpdateNote] = useState(false);

  return (
    <>
      {updateNote && <UpdateForm note={note} setUpdateNote={setUpdateNote} />}
      <button className="ml-2" onClick={() => setUpdateNote(true)}>
        <Icon name="edit_document" styles="text-purple-500" />
      </button>
    </>
  );
}
