import React from "react";
import DisplayNotes from "./components/DisplayNotes";
import { Provider } from "./contexts/GetListContext";
import "./App.css";
import "./components/ModalStyles";

function App() {
  return (
    <div className="App flex flex-col max-w-2xl">
      <Provider>
        <DisplayNotes />
      </Provider>
    </div>
  );
}

export default App;
