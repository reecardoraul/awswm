import React, {useEffect, useReducer, useState} from "react";
import {BrowserRouter as Router, Link, useHistory} from "react-router-dom";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DownhillSkiingIcon from '@mui/icons-material/DownhillSkiing';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import SettingsIcon from '@mui/icons-material/Settings';

export default function Home() {
    const history = useHistory();

    const styles = {
        largeIcon: {
            width: 60,
            height: 60,
        },
    };

    return (
        <div>
            <Typography variant='caption' sx={{ fontSize: 24 }} color="text.secondary" gutterBottom>Home</Typography>
            <div>
                <Link to='/volunteers'><IconButton><VolunteerActivismIcon/><div> - Volunteers</div></IconButton></Link>
            </div>
            <div>
                <Link to='/athletes'><IconButton><DownhillSkiingIcon/><div> - Athletes</div></IconButton></Link>
            </div>
            <div>
                <Link to='/settings'><IconButton><SettingsIcon/><div> - Settings</div></IconButton></Link>
            </div>
        </div>
    );

}

Home.propTypes = {

}