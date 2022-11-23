import { useState } from 'react'
import Icon from './Icon'

export default function ShowDesc({ desc }) {
    const [expand, setExpand] = useState(false)

    return (
        <div className="ml-1 flex items-start space-x-2">
            <button onClick={() => setExpand((prev) => !prev)}>
                <Icon
                    name="expand"
                    styles="text-blue-500 text-base"
                />
            </button>
            {expand ?
                <pre className="whitespace-pre-line">{desc}</pre> :
                <div className="truncate w-96">{desc}</div>
            }
        </div>
    )
}