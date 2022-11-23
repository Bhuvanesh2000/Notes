import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import Icon from './Icon'

export default function CreateForm({ id, setUpdateNote }) {
    const [note, setNote] = useState({ title: "", description: "" });
    const navigate = useNavigate();

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
        navigate("/");
    }

    const closePopup = () => {
        setUpdateNote(false);
    }

    return (
        <div className="disable-bg">
            <form
                action="#"
                className="popup-style"
                onSubmit={() => updateNote(id)}
                style={{ width: "500px" }}
            >
                <div
                    align="center"
                    className="font-bold text-2xl"
                >
                    Update Note
                </div>
                <div className="button-style button-style-gray">
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
                <div className="button-style button-style-gray">
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
                        className="button-style button-style-green"
                    >
                        <Icon name="done" />
                        <span>Save</span>
                    </button>
                    <button
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