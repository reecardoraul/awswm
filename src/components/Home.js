import React from "react";
import {Link, useHistory} from "react-router-dom";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DownhillSkiingIcon from '@mui/icons-material/DownhillSkiing';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import SettingsIcon from '@mui/icons-material/Settings';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';

export default function Home() {

    return (
        <div>
            <Typography variant='caption' sx={{ fontSize: 24 }} color="text.secondary" gutterBottom>Home</Typography>
            <div>
                <Link to='/volunteers'><IconButton><VolunteerActivismIcon fontSize={"large"}/><div> - Volunteers</div></IconButton></Link>
            </div>
            <div>
                <Link to='/athletes'><IconButton><DownhillSkiingIcon fontSize={"large"}/><div> - Athletes</div></IconButton></Link>
            </div>
            <div>
                <Link to='/matching'><IconButton><CompareArrowsIcon fontSize={"large"}/><div> - Matching</div></IconButton></Link>
            </div>
            <div>
                <Link to='/settings'><IconButton><SettingsIcon fontSize={"large"}/><div> - Settings</div></IconButton></Link>
            </div>

        </div>
    );

}

Home.propTypes = {

}