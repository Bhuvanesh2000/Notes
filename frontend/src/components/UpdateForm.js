import { useState } from "react";
import Icon from "./Icon";
import Modal from "react-modal";
import useGetListContext from "../hooks/useGetListContext";

export default function UpdateForm({ note, setUpdateNote }) {
  const [currentNote, setCurrentNote] = useState(note);
  const { getList, setGetList } = useGetListContext();

  const updateNoteValue = (value) => {
    // ...value will get complete object from DB with updated fields
    // where as {...prev, title: newTitle} will ignore all other fields from DB but just update title of the current note
    // This will cause issue if other user update other field of same object which will not update in above case
    setCurrentNote((prev) => {
      return { ...prev, ...value };
    });
  };

  const updateNote = async (id) => {
    // await fetch(`http://localhost:5000/update/${id}`, {
    await fetch(`http://localhost:3002/notes/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(currentNote),
    }).catch((error) => {
      window.alert(error);
      return;
    });
    setUpdateNote(false);
    setGetList(true);
  };

  const closePopup = () => {
    setUpdateNote(false);
  };

  return (
    <Modal isOpen={true} onRequestClose={() => closePopup()}>
      <form
        action="#"
        className="popup"
        onSubmit={() => updateNote(currentNote.id)}
        style={{ width: "500px" }}
      >
        <div align="center" className="font-bold text-2xl">
          Update Note
        </div>
        <div className="button button-gray">
          <input
            type="text"
            onChange={(e) => updateNoteValue({ title: e.currentTarget.value })}
            placeholder="Enter a title..."
            className="outline-none bg-transparent w-full"
            defaultValue={currentNote.title}
            required
            autoFocus
          />
        </div>
        <div className="button button-gray">
          <textarea
            placeholder="Enter a note..."
            rows={5}
            className="scrollbar-gray align-top w-full rounded-md resize-none outline-none bg-transparent"
            onChange={(e) =>
              updateNoteValue({ description: e.currentTarget.value })
            }
            defaultValue={currentNote.description}
            required
          ></textarea>
        </div>
        <div className="flex w-full justify-between">
          <button type="submit" className="button button-green">
            <Icon name="done" />
            <span>Save</span>
          </button>
          <button className="button button-red" onClick={() => closePopup()}>
            <Icon name="close" />
            <span>Cancel</span>
          </button>
        </div>
      </form>
    </Modal>
  );
}
