import { useEffect, useState } from 'react';
import Icon from './Icon'
import Modal from 'react-modal'

export default function UpdateForm({ id, setUpdateNote, setGetList }) {
    const [note, setNote] = useState({ title: "", description: "" });

    useEffect(() => {
        const getNote = async (_id) => {
            const res = await fetch(`http://localhost:5000/record/${_id}`).catch(error => {
                window.alert(error);
                return;
            });
            if (res.ok) {
                let data = await res.json();
                delete data._id; // delete "_id" key from response data
                setNote(data);
            }
        }
        getNote(id)
    }, [])

    const updateNoteValue = (value) => {
        setNote((prev) => { return { ...prev, ...value } })
    }

    const updateNote = async (_id) => {
        await fetch(`http://localhost:5000/update/${_id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(note),
        }).catch(error => {
            window.alert(error);
            return;
        });
        setUpdateNote(false);
        setGetList(true);
    }

    const closePopup = () => {
        setUpdateNote(false);
    }

    return (
        <Modal
            isOpen={true}
            onRequestClose={() => closePopup()}
        >
            <form
                action="#"
                className="popup"
                onSubmit={() => updateNote(id)}
                style={{ width: "500px" }}
            >
                <div
                    align="center"
                    className="font-bold text-2xl"
                >
                    Update Note
                </div>
                <div className="button button-gray">
                    <input
                        type="text"
                        onChange={(e) => updateNoteValue({ title: e.currentTarget.value })}
                        placeholder="Enter a title..."
                        className="outline-none bg-transparent w-full"
                        defaultValue={note["title"]}
                        required
                        autoFocus
                    />
                </div>
                <div className="button button-gray">
                    <textarea
                        placeholder="Enter a note..."
                        rows={5}
                        className="scrollbar-gray align-top w-full rounded-md resize-none outline-none bg-transparent"
                        onChange={(e) => updateNoteValue({ description: e.currentTarget.value })}
                        defaultValue={note["description"]}
                        required
                    >
                    </textarea>
                </div>
                <div className="flex w-full justify-between">
                    <button
                        type="submit"
                        className="button button-green"
                    >
                        <Icon name="done" />
                        <span>Save</span>
                    </button>
                    <button
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