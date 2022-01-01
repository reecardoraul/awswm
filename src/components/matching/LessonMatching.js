import React, {useState} from 'react';
import {Card, CardActionArea, CardContent, CardHeader, Collapse, IconButton} from "@mui/material";

import PropTypes from "prop-types";
import {ExpandLess, ExpandMore} from "@mui/icons-material";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import DownhillSkiingIcon from '@mui/icons-material/DownhillSkiing';
import PeepTile from "./PeepTile";

export default function LessonMatching({lesson, lesson_master, peeps, onSave}) {
    const [expanded, setExpanded] = useState(false);

    const button = expanded ? <ExpandLess/> : <ExpandMore/>;

    const volunteers = lesson_master.filter( peep =>peep.role === "VOLUNTEER");

    let volunteerIcon = <VolunteerActivismIcon/>;
    let athleteIcon = <DownhillSkiingIcon/>;

    const getMasterPerson = (master_id ) => {
        let retval =  peeps.filter( person => person.id == master_id );

        if( retval.length == 1 )
            return retval[0];
        else
            Window.alert("Uknown ID " + master_id);
    };

    const athletes = lesson_master.filter( peep =>peep.role === "STUDENT");

    const volTiles = volunteers.map( peep => <PeepTile id={"l" + lesson.id + "m" + peep.id + "t"}
                                                       peep={ getMasterPerson(peep.master_id)}
                                                       icon={volunteerIcon}/> );
    const athTiles = athletes.map( peep => <PeepTile id={"l" + lesson.id + "m" + peep.id + "t"} peep={getMasterPerson(peep.master_id)} icon={athleteIcon}/> );

    const subheader = [].concat(...athTiles,...volTiles);

    return <Card key={"lessoncard_" + lesson.id} variant={"outlined"}>
        <CardActionArea
            onClick={() => setExpanded(!expanded)}
        >
            <CardHeader title={lesson.ltype}
                        subheader={subheader}
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

            </CardContent>
        </Collapse>
    </Card>
}

LessonMatching.propTypes = {
    lesson: PropTypes.object.isRequired,
    lesson_master: PropTypes.object.isRequired,
    peeps: PropTypes.object.isRequired,
    onSave: PropTypes.func.isRequired
}
