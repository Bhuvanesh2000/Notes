import Icon from './Icon'
import Delete from './Delete'
import Update from './Update'
import GetList from './GetList'
import ShowDesc from './ShowDesc'
import { useState } from 'react'

export default function DisplayNotes() {
    const [notesList, setNotesList] = useState([]);
    const [getList, setGetList] = useState(true);

    return (
        <div className="space-y-4 mt-4">
            {getList &&
                <GetList
                    setNotesList={setNotesList}
                    setGetList={setGetList}
                />
            }
            {notesList?.map(({ _id, title, description }, key) =>
                <li key={key} className="list-none">
                    <div className="flex flex-col space-y-2">
                        <div className="flex items-start">
                            <Icon name="text_snippet" />
                            <div className="flex-1 space-y-2">
                                <h3 className="text-xl font-bold ml-2">{title}</h3>
                                <div className="flex items-start">
                                    <ShowDesc desc={description} />
                                </div>
                            </div>
                            <Update id={_id} />
                            <Delete id={_id} setGetList={setGetList} />
                        </div>
                    </div>
                </li>
            )}
        </div>
    )
}