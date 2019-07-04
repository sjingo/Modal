import React,{useReducer} from 'react';
import logo from './logo.svg';
import Modal from './Modal'
import ModalReducer from './reducer-modal'
import './App.css';

function App() {
  const [state,dispatch] = useReducer(ModalReducer)
  return (
    <div className="App">
      <header className="App-header">
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
      <button onClick={() => dispatch({ type: 'OPEN_MODAL' })}>open</button>
      <Modal/>

    </div>
  );
}

export default App;
