import './App.css';
import React, {useState} from 'react';
import axios from "axios";
import Auth from "./components/Auth";
import config from "./config.json";
import Vols from "./components/Vols";
import Vol from "./components/Vol";
import DownhillSkiingIcon from '@mui/icons-material/DownhillSkiing';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import SettingsIcon from '@mui/icons-material/Settings';
import IconButton from "@mui/material/IconButton";

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

  return <Router>
          <div>
              <div className='App-header'>
                AWSWM Admin
                <nav>
                    <Link to='/volunteers'><IconButton><VolunteerActivismIcon/></IconButton></Link>
                    <Link to='/athletes'><IconButton><DownhillSkiingIcon/></IconButton></Link>
                    <Link to='/settings'><IconButton><SettingsIcon/></IconButton></Link>
                </nav>
            </div>
            <Switch>
                <div className='content'>
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
                </div>
            </Switch>
          </div>
      </Router>
}

export default App;
