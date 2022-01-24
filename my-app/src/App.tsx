import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

const TEST = styled.p`
  background-color: green;
`

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TEST>
          Edit <code>src/App.tsx</code> and save to reload.
        </TEST>
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
