import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import axios from "axios";
import Auth from "./components/Auth";
import config from "./config.json";

axios.defaults.baseURL = config.BASE_PATH;
axios.defaults.headers.post['Conent-Type']='application/json';
axios.defaults.withCredentials=true;

function App() {
  const [user, setUser] = useState();

  if(!user) {
     return <Auth setUser={setUser} />
   }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello {user.username}</h1>
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
