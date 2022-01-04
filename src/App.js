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
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import SettingsIcon from '@mui/icons-material/Settings';
import IconButton from "@mui/material/IconButton";
import {isMobile} from "react-device-detect";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Timeslots from "./components/settings/Timeslots";
import Matching from "./components/matching/Matching";


axios.defaults.baseURL = config.BASE_PATH;
axios.defaults.headers.post['Conent-Type'] = 'application/json';
axios.defaults.withCredentials = true;

function App() {
    const [user, setUser] = useState();
    const [volunteer, setVolunteer] = useState({});
    const [athlete, setAthlete] = useState({});

    if (!user) {
        return <Auth setUser={setUser}/>
    }

    let volunteerIcon = <VolunteerActivismIcon/>;
    let athleteIcon = <DownhillSkiingIcon/>;
    let title = "AWSWM Admin";

    let titleStyle = isMobile ? {position: "absolute", bottom: "2vmin"} : {position: "absolute", bottom: "1vmin"};

    return <Router>
        <div>
            <header className='App-header'>
                <div style={{position: "relative", width: "100%"}}>
                    <div style={titleStyle}>{title}</div>
                    <div className='App-header-buttons'>
                        <Link to='/volunteers'><IconButton><VolunteerActivismIcon style={{fill: "white"}}/></IconButton></Link>
                        <Link to='/athletes'><IconButton><DownhillSkiingIcon
                            style={{fill: "white"}}/></IconButton></Link>
                        <Link to='/matching'><IconButton><CompareArrowsIcon
                            style={{fill: "white"}}/></IconButton></Link>
                        <Link to='/settings'><IconButton><SettingsIcon style={{fill: "white"}}/></IconButton></Link>
                    </div>
                </div>
            </header>
            <div className='content'>
                <Switch>
                    <Route exact path="/volunteers">
                        <PeepLister fetchUrl='/volunteers' nextPath='volunteer' setPeep={setVolunteer}
                                    label="Volunteers" icon={volunteerIcon}/>
                    </Route>
                    <Route exact path="/athletes">
                        <PeepLister fetchUrl='/students' nextPath='athlete' setPeep={setAthlete} label="Athletes"
                                    icon={athleteIcon}/>
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
                    <Route exact path="/matching">
                        <Matching/>
                    </Route>
                    <Route exact path="/settings">
                        <Timeslots/>
                    </Route>
                </Switch>
            </div>
        </div>
    </Router>
}

export default App;
