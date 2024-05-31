import Icon from "./Icon";
import Create from "./Create";
import Delete from "./Delete";
import Update from "./Update";
import GetList from "./GetList";
import ShowDesc from "./ShowDesc";
import { useReducer, useState } from "react";
import useGetListContext from "../hooks/useGetListContext";

const SET_NOTES_LIST = "set-notes-list";
const reduce = (state, action) => {
  switch (action.type) {
    case SET_NOTES_LIST:
      return {
        ...state,
        notesList: action.payload,
      };
    default:
      return state;
  }
};

export default function DisplayNotes() {
  const { getList } = useGetListContext();
  const [state, dispatch] = useReducer(reduce, {
    notesList: [],
  });

  const setNotesList = (data) => {
    dispatch({
      type: SET_NOTES_LIST,
      payload: data,
    });
  };

  return (
    <>
      <Create />
      <div className="space-y-4 mt-4 overflow-auto h-full">
        {getList && <GetList setNotesList={setNotesList} />}
        {state.notesList?.map((note, key) => (
          <li key={key} className="list-none">
            <div className="flex flex-col space-y-2">
              <div className="flex items-start">
                <Icon name="text_snippet" />
                <div className="flex-1 space-y-2">
                  <h3 className="text-xl font-bold ml-2">{note.title}</h3>
                  <div className="flex items-start">
                    <ShowDesc desc={note.description} />
                  </div>
                </div>

                <Update note={note} />
                <Delete note={note} />
              </div>
            </div>
          </li>
        ))}
      </div>
    </>
  );
}
