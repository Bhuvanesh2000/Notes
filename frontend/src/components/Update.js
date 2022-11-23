import Icon from './Icon';
import UpdateForm from './UpdateForm'
import { useState } from 'react';

export default function Update({ id }) {
    const [updateNote, setUpdateNote] = useState(false)

    return (
        <>
            {updateNote &&
                <UpdateForm
                    id={id}
                    setUpdateNote={setUpdateNote}
                />
            }
            <button
                className="ml-2"
                onClick={() => setUpdateNote(true)}
            >
                <Icon
                    name="edit_document"
                    styles="text-purple-500"
                />
            </button>
        </>
    )
}