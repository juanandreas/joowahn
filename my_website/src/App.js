import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to my website.
          <br></br>
          Still a work in progress.
        </p>

        <a
          className="App-link"
          href="https://github.com/juanandreas/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>

        <a
          className="App-link"
          href="https://www.linkedin.com/in/jandreasucsc/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>

        
      </header>
    </div>
  );
}

export default App;
