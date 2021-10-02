import './App.css';
import React, {useState} from 'react';
import axios from "axios";
import Auth from "./components/Auth";
import config from "./config.json";
import Vols from "./components/Vols";
import Vol from "./components/Vol";
import {
    BrowserRouter as Router,
        Switch,
        Route,
        Link
} from "react-router-dom";


axios.defaults.baseURL = config.BASE_PATH;
axios.defaults.headers.post['Conent-Type']='application/json';
axios.defaults.withCredentials=true;

function App() {
  const [user, setUser] = useState();
  const [volunteer, setVolunteer] = useState({});

  if(!user) {
     return <Auth setUser={setUser} />
   }

  return <div className='app-wrapper'>
      <Router>
          <div>
            <nav>
                <ul>
                  <li><Link to='/volunteers'>Volunteers</Link></li>
                  <li><Link to='/athletes'>Athletes</Link></li>
                  <li><Link to='/settings'>Settings</Link></li>
                </ul>
            </nav>
            <Switch>
                <Route path="/volunteers">
                    <Vols setVolunteer={setVolunteer}></Vols>
                </Route>
                <Route path="/athletes">

                </Route>
                <Route path="/settings">

                </Route>
                <Route path="/volunteer">
                    <Vol volunteer={volunteer}></Vol>
                </Route>
            </Switch>
          </div>
      </Router>


  </div>
}

export default App;
