import { useEffect } from 'react';

export default function GetList({ setNotesList, setGetList }) {
    useEffect(() => {
        const getNotes = async () => {
            const res = await fetch(`http://localhost:5000/record`).catch(error => {
                window.alert(error);
                return;
            });
            if (res.ok) {
                const data = await res.json();
                setNotesList(data);
                setGetList(false);
            }
        }
        getNotes();
    }, [])

    return (<></>)
}