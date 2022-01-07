import React from 'react';
import PropTypes from 'prop-types';
import {Avatar} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import DownhillSkiingIcon from "@mui/icons-material/DownhillSkiing";
import { green, pink } from '@mui/material/colors';

export default function PeepAvatar({peep}) {
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


    return {icon}
}

PeepAvatar.propTypes = {
    peep: PropTypes.object.isRequired
}