import React from 'react';
import PropTypes from 'prop-types';
import Box from "@mui/material/Box";
import {Avatar, Typography} from "@mui/material";

export default function PeepTile({peep,icon}) {
    return <Box>
        <Avatar>{icon}</Avatar>
        <Typography>{peep.lastname + ", " + peep.firstname}</Typography>
    </Box>
}

PeepTile.propTypes = {
    peep: PropTypes.object.isRequired,
    icon: PropTypes.object.isRequired
}