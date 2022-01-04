import React from 'react';
import PropTypes from 'prop-types';
import {Avatar, Typography} from "@mui/material";
import Paper from "@mui/material/Paper";
import CardHeader from "@mui/material/CardHeader";
import CardActionArea from "@mui/material/CardActionArea";

export default function PeepTileClick({peep, icon, onClick}) {

    const safeClick = (peep) => {
        if( onClick ){
            onClick(peep)
        }
    }

    return <Paper variant="outlined" style={{display: "inline-block", margin: "3px"}}>
        <CardActionArea
            onClick={ () => safeClick(peep) }
        >
            <CardHeader
                avatar={<Avatar>{icon}</Avatar>}
                title={
                    <Typography variant='caption' sx={{fontSize: 12}} color="text.secondary" gutterBottom>
                        {peep.lastname + ", " + peep.firstname}
                    </Typography>
                }
            />
        </CardActionArea>
    </Paper>
}

PeepTileClick.propTypes = {
    peep: PropTypes.object.isRequired,
    icon: PropTypes.object.isRequired,
    onClick: PropTypes.func,
}