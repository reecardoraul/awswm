import React from 'react';
import PropTypes from 'prop-types';
import {Avatar, Typography} from "@mui/material";
import Paper from "@mui/material/Paper";
import CardHeader from "@mui/material/CardHeader";

export default function PeepTile({peep, icon}) {
    return <Paper variant="outlined" style={{display: "inline-block", margin: "3px"}}>
        <CardHeader
            avatar={<Avatar>{icon}</Avatar>}
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
    icon: PropTypes.object.isRequired
}