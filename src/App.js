import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import axios from "axios";
import Auth from "./components/Auth";
import config from "./config.json";
import Vols from "./components/Vols";

axios.defaults.baseURL = config.BASE_PATH;
axios.defaults.headers.post['Conent-Type']='application/json';
axios.defaults.withCredentials=true;

function App() {
  const [user, setUser] = useState();

  if(!user) {
     return <Auth setUser={setUser} />
   }

  return <div className='app-wrapper'><Vols></Vols></div>
}

export default App;
