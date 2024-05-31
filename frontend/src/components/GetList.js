import { useEffect } from "react";
import useGetListContext from "../hooks/useGetListContext";

export default function GetList({ setNotesList }) {
  const { setGetList } = useGetListContext();

  const getNotes = async () => {
    // const res = await fetch(`http://localhost:5000/record`).catch(error => {
    const res = await fetch(`http://localhost:3002/notes`).catch((error) => {
      window.alert(error);
      return;
    });
    if (res.ok) {
      const data = await res.json();
      setNotesList(data);
      setGetList(false);
    }
  };

  useEffect(() => {
    getNotes();
  }, []);

  return <></>;
}
