import './App.css';
import React, {useState} from 'react';
import axios from "axios";
import Auth from "./components/Auth";
import config from "./config.json";
import PeepLister from "./components/PeepLister";
import Vol from "./components/Vol";
import Athlete from "./components/Athlete";
import Home from "./components/Home";
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
  const [athlete, setAthlete] = useState({});

  if(!user) {
     return <Auth setUser={setUser} />
   }

  let volunteerIcon = <VolunteerActivismIcon/>;
  let athleteIcon = <DownhillSkiingIcon/>;

  return <Router>
          <div>
              <header className='App-header'>
                  <div>
                AWSWM Admin
                    <Link to='/volunteers'><IconButton><VolunteerActivismIcon style={{fill:"white"}}/></IconButton></Link>
                    <Link to='/athletes'><IconButton><DownhillSkiingIcon style={{fill:"white"}}/></IconButton></Link>
                    <Link to='/settings'><IconButton><SettingsIcon style={{fill:"white"}}/></IconButton></Link>
                  </div>
              </header>
            <Switch>
                <div className='content'>
                    <Route exact path="/volunteers">
                        <PeepLister fetchUrl='/volunteers' nextPath='volunteer' setPeep={setVolunteer} label="Volunteers" icon={volunteerIcon}/>
                    </Route>
                    <Route exact path="/athletes">
                        <PeepLister fetchUrl='/students' nextPath='athlete' setPeep={setAthlete} label="Athletes" icon={athleteIcon}/>
                    </Route>
                    <Route exact path="/volunteer">
                        <Vol volunteer={volunteer}/>
                    </Route>
                    <Route exact path="/athlete">
                        <Athlete athlete={athlete}/>
                    </Route>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                </div>
            </Switch>
          </div>
      </Router>
}

export default App;
