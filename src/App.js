import logo from './logo.svg';
import React from 'react';
import './App.css';
import CForm from './components/CForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>MALENCIANO TRANSLATOR</h1>
        <CForm />
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
