import './App.css';
import DisplayNotes from './components/DisplayNotes'
import React from 'react';
import ModalStyles from './components/ModalStyles'

function App() {
    return (
        <div className="App flex flex-col max-w-2xl">
            <DisplayNotes />
        </div>
    );
}

export default App;
