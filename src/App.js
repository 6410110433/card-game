import React from 'react';
import './App.css';
import Wordcard from './Wordcard';

const word = "Hello";
function App() {
  return (
    <div>
      <Wordcard value={word}/>
    </div>
  );
}

export default App;
