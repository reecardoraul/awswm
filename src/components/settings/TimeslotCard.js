import React, {useState} from 'react';
import {Card, CardActionArea, CardContent, CardHeader, Collapse, IconButton} from "@mui/material";

import Timeslot from "./Timeslot";
import PropTypes from "prop-types";
import {ExpandLess, ExpandMore} from "@mui/icons-material";

export default function TimeslotCard({timeslot, onSave}) {
    const [expanded, setExpanded] = useState(false);

    const button = expanded ? <ExpandLess/> : <ExpandMore/>;

    return <Card key={"tscard_" + timeslot.id} variant={"outlined"}>
        <CardActionArea
            onClick={() => setExpanded(!expanded)}
        >
            <CardHeader title={timeslot.timeslot}
                        subheader={timeslot.coordinator + " - " + timeslot.first_night}
                action={
                    <IconButton>
                        {button}
                    </IconButton>
                }
            >
            </CardHeader>
        </CardActionArea>

        <Collapse in={expanded} unmountOnExit>
            <CardContent>
                <Timeslot timeslot={timeslot} onSave={onSave}/>
            </CardContent>
        </Collapse>
    </Card>
}

TimeslotCard.propTypes = {
    timeslot: PropTypes.object.isRequired,
    onSave: PropTypes.func.isRequired
}
