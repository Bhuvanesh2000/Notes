import './App.css';
import Create from './components/Create'
import DisplayNotes from './components/DisplayNotes'
import React from 'react';

function App() {
    return (
        <div className="App flex flex-col max-w-2xl">
            <Create />
            <DisplayNotes />
        </div>
    );
}

export default App;
