import React from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person';
import Product from './Product';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Person name ="Robert" project="Project"/>
      <Product name ="Apricot" price="2$" description="The best apricots from Armenia"/>
        <img src={logo} className="App-logo" alt="logo" />
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
        </a>
        
      </header>
    </div>
  );
}

export default App;
