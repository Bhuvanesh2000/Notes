import { useState, useEffect } from 'react';
import Icon from './Icon'

export default function DeleteForm({ id, setGetList, setDel }) {
    const [note, setNote] = useState({ title: "", description: "" });

    useEffect(() => {
        const getNote = async (_id) => {
            const res = await fetch(`http://localhost:5000/record/${_id}`).catch(error => {
                window.alert(error);
                return;
            });
            if (res.ok) {
                let data = await res.json();
                delete data._id; // delete _id key from record
                setNote(data);
            }
        }
        getNote(id)
    }, [])

    const deleteNote = async (_id) => {
        await fetch(`http://localhost:5000/${_id}`, {
            method: "DELETE"
        });
        setGetList(true);
        setDel(false);
    }

    const closePopup = () => {
        setDel(false);
    }

    return (
        <div className="disable-bg">
            <form
                action="#"
                className="popup-style"
                onSubmit={() => deleteNote(id)}
                style={{ width: "500px" }}
            >
                <div
                    align="center"
                    className="font-bold text-2xl"
                >
                    Delete Note
                </div>
                <hr />
                <div align="center">
                    Confirm to delete
                    <span className="font-bold"> {note.title} </span>?
                </div>
                <div className="flex w-full justify-between">
                    <button
                        type="submit"
                        className="button-style button-style-green"
                    >
                        <Icon name="done" />
                        <span>Delete</span>
                    </button>
                    <button
                        type="button"
                        className="button-style button-style-red"
                        onClick={() => closePopup()}
                    >
                        <Icon name="close" />
                        <span>Cancel</span>
                    </button>
                </div>
            </form>
        </div>
    )

}