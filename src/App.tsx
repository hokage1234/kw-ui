
// src/App.js
import React from 'react';
import logo from './logo.svg';
import './App.css';
import WelcomeMessage from './WelcomeMessage';
import DoublingButton from './DoublingButton'; 

// src/App.js - fragment kodu
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> Cześć Daniel dzięki za pomoc.
        </p>
        <WelcomeMessage name="Świecie" />
        <DoublingButton />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
