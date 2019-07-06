import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

      <div class="fullpage-wrapper">
        <div class="reactor-container">
            <div class="reactor-container-inner circle abs-center"></div>
            <div class="tunnel circle abs-center"></div>
            <div class="core-wrapper circle abs-center"></div>
            <div class="core-outer circle abs-center"></div>
            <div class="core-inner circle abs-center"></div>
            <div class="coil-container">
            <div class="coil coil-1"></div>
            <div class="coil coil-2"></div>
            <div class="coil coil-3"></div>
            <div class="coil coil-4"></div>
            <div class="coil coil-5"></div>
            <div class="coil coil-6"></div>
            <div class="coil coil-7"></div>
            <div class="coil coil-8"></div>
          </div>
        </div>
      </div>


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
