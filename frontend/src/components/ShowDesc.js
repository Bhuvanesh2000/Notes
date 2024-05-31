import { useState } from "react";
import Icon from "./Icon";

export default function ShowDesc({ desc }) {
  const [expand, setExpand] = useState(false);

  return (
    <div className="ml-1 flex items-start space-x-2 w-full relative">
      <button onClick={() => setExpand((prev) => !prev)} title="expand">
        <Icon name="swap_vertical_circle" styles="text-gray-500 text-xl" />
      </button>
      {expand ? (
        <pre className="whitespace-pre-line desc-ext-line max-h-52 overflow-auto flex-1 my-2">{desc}</pre>
      ) : (
        <div className="truncate w-96">{desc}</div>
      )}
    </div>
  );
}
