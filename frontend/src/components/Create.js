import { useState } from 'react';
import Icon from './Icon'
import CreateForm from './CreateForm'

export default function Create() {
    const [create, setCreate] = useState(false);

    return (
        <>
            {create && <CreateForm setCreate={setCreate} />}
            <button
                className="button-style button-style-blue"
                onClick={() => setCreate(true)}
            >
                <Icon name="add_box" />
                <span>Create Note</span>
            </button>
        </>
    )
}