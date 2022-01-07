import React from 'react';
import PropTypes from 'prop-types';
import Paper from "@mui/material/Paper";
import CardActionArea from "@mui/material/CardActionArea";
import PeepTile from "./PeepTile";

export default function PeepTileClick({peep, onClick}) {

    const safeClick = (peep) => {
        if( onClick ){
            onClick(peep)
        }
    }

    return <Paper variant="outlined" style={{display: "inline-block", margin: "3px"}}>
        <CardActionArea
            onClick={ () => safeClick(peep) }
        >
            <PeepTile peep={peep}/>
        </CardActionArea>
    </Paper>
}

PeepTileClick.propTypes = {
    peep: PropTypes.object.isRequired,
    onClick: PropTypes.func,
}