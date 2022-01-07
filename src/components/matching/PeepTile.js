import React from 'react';
import PropTypes from 'prop-types';
import {Avatar, Typography} from "@mui/material";
import Paper from "@mui/material/Paper";
import CardHeader from "@mui/material/CardHeader";
import PersonIcon from "@mui/icons-material/Person";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import DownhillSkiingIcon from "@mui/icons-material/DownhillSkiing";
import { green, pink } from '@mui/material/colors';


export default function PeepTile({peep}) {
    const vColor = green[100];
    const aColor = pink[100];
    const volunteerIcon = <Avatar sx={{bgcolor: vColor}}><VolunteerActivismIcon/></Avatar>
    const athleteIcon = <Avatar sx={{bgcolor: aColor}}><DownhillSkiingIcon /></Avatar>
    const personIcon = <PersonIcon/>

    const icon =
        peep ? (
            peep.role ? ( peep.role.toLowerCase().startsWith("s") ? athleteIcon : volunteerIcon)
                : personIcon
            )
            : personIcon


    return <Paper variant="outlined" style={{display: "inline-block", margin: "3px"}}>
        <CardHeader
            avatar={icon}
            title={
                <Typography variant='caption' sx={{fontSize: 12}} color="text.secondary" gutterBottom>
                    {peep.lastname + ", " + peep.firstname}
                </Typography>
            }
        />
    </Paper>
}

PeepTile.propTypes = {
    peep: PropTypes.object.isRequired,
    onClick: PropTypes.func,
}