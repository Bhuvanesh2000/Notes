import { useState } from 'react';
import { useNavigate } from 'react-router';
import Icon from './Icon'

export default function CreateForm({ setCreate }) {
    const [note, setNote] = useState({ title: "", description: "" });
    const navigate = useNavigate();

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
        setNote({ title: "", description: "" });
        navigate("/");
    }

    const closePopup = () => {
        setCreate(false);
    }

    return (
        <div className="disable-bg">
            <form
                action="#"
                className="popup-style"
                style={{ width: "500px" }}
                onSubmit={() => createNote()}
            >
                <div
                    align="center"
                    className="font-bold text-2xl"
                >
                    Create a Note
                </div>
                <div className="button-style button-style-gray">
                    <input
                        type="text"
                        onChange={(e) => updateNote({ title: e.currentTarget.value })}
                        placeholder="Enter a title..."
                        className="outline-none bg-transparent w-full"
                        required
                    />
                </div>
                <div className="button-style button-style-gray">
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
                        className="button-style button-style-green"
                    >
                        <Icon name="done" />
                        <span>Add</span>
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