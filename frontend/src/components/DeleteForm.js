import { useState } from "react";
import Icon from "./Icon";
import Modal from "react-modal";
import useGetListContext from "../hooks/useGetListContext";

export default function DeleteForm({ note, setDel }) {
  const [currentNote, setCurrentNote] = useState(note);
  const { setGetList } = useGetListContext();

  const deleteNote = async (id) => {
    // await fetch(`http://localhost:5000/${id}`, {
    await fetch(`http://localhost:3002/notes/${id}`, {
      method: "DELETE",
    });
    setGetList(true);
    setDel(false);
  };

  const closePopup = () => {
    setDel(false);
  };

  return (
    <Modal isOpen={true} onRequestClose={() => closePopup()}>
      <form action="#" className="popup" onSubmit={() => deleteNote(currentNote.id)}>
        <div align="center" className="font-bold text-2xl">
          Delete Note
        </div>
        <hr />
        <div align="center">
          Confirm to delete
          <span className="font-bold"> {currentNote.title} </span>?
        </div>
        <div className="flex w-full justify-between !mt-5">
          <button type="submit" className="button button-green">
            <Icon name="done" />
            <span>Delete</span>
          </button>
          <button
            type="button"
            className="button button-red"
            onClick={() => closePopup()}
          >
            <Icon name="close" />
            <span>Cancel</span>
          </button>
        </div>
      </form>
    </Modal>
  );
}
