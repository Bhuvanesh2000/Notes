import { useState } from 'react';
import Icon from './Icon'
import CreateForm from './CreateForm'

export default function Create({ setGetList }) {
    const [create, setCreate] = useState(false);

    return (
        <>
            {create &&
                <CreateForm
                    setCreate={setCreate}
                    setGetList={setGetList}

                />
            }
            <button
                className="button button-blue"
                onClick={() => setCreate(true)}
            >
                <Icon name="add" />
                <span>Create Note</span>
            </button>
        </>
    )
}