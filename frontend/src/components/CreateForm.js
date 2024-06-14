import { useState } from 'react';
import Icon from './Icon'
import Modal from 'react-modal'

export default function CreateForm({ setCreate, setGetList }) {
    const [note, setNote] = useState({ title: "", description: "" });

    const updateNote = (value) => {
        setNote((prev) => { return { ...prev, ...value } })
    }

    const createNote = async () => {
        await fetch(`http://localhost:5000/record/add`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(note),
        }).catch(error => {
            window.alert(error);
            return;
        });
        setGetList(true);
        setCreate(false);
    }

    const closePopup = () => {
        setCreate(false);
    }

    return (
        <Modal
            isOpen={true}
            onRequestClose={() => closePopup()}
        >
            <form
                action="#"
                className="popup"
                style={{ width: "500px" }}
                onSubmit={() => createNote()}
            >
                <div
                    align="center"
                    className="font-bold text-2xl"
                >
                    Create a Note
                </div>
                <div className="button button-gray">
                    <input
                        type="text"
                        onChange={(e) => updateNote({ title: e.currentTarget.value })}
                        placeholder="Enter a title..."
                        className="outline-none bg-transparent w-full"
                        required
                        autoFocus
                    />
                </div>
                <div className="button button-gray">
                    <textarea
                        placeholder="Enter a note..."
                        rows={5}
                        className="scrollbar-gray align-top w-full rounded-md resize-none outline-none bg-transparent"
                        onChange={(e) => updateNote({ description: e.currentTarget.value })}
                        required
                    />
                </div>
                <div className="flex w-full justify-between">
                    <button
                        type="submit"
                        className="button button-green hover:drop-shadow-2xl"
                    >
                        <Icon name="done" />
                        <span>Add</span>
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
    )

}