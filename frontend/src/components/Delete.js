import { useState } from "react";
import Icon from "./Icon";
import DeleteForm from "./DeleteForm";

export default function Delete({ note }) {
  const [del, setDel] = useState(false);

  return (
    <>
      {del && <DeleteForm note={note} setDel={setDel} />}
      <button className="ml-2" onClick={() => setDel(true)}>
        <Icon name="delete" styles="text-red-500" />
      </button>
    </>
  );
}
