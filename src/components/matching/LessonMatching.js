import React from 'react';
import {Card, CardContent, CardHeader} from "@mui/material";

import PropTypes from "prop-types";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import DownhillSkiingIcon from '@mui/icons-material/DownhillSkiing';
import PeepTile from "./PeepTile";

export default function LessonMatching({lesson, lesson_master, peeps}) {
    const volunteers = lesson_master.filter(peep => peep.role === "VOLUNTEER");

    let volunteerIcon = <VolunteerActivismIcon/>;
    let athleteIcon = <DownhillSkiingIcon/>;

    const getMasterPerson = (master_id) => {
        let retval = peeps.filter(person => person.id === master_id);

        if (retval.length === 1)
            return retval[0];
        else
            Window.alert("Unknown ID " + master_id);
    };

    const athletes = lesson_master.filter(peep => peep.role === "STUDENT");

    const volTiles = volunteers.map(peep => <PeepTile id={"l" + lesson.id + "m" + peep.id + "t"}
                                                      peep={getMasterPerson(peep.master_id)}
                                                      icon={volunteerIcon}/>);
    const athTiles = athletes.map(peep => <PeepTile id={"l" + lesson.id + "m" + peep.id + "t"}
                                                    peep={getMasterPerson(peep.master_id)} icon={athleteIcon}/>);

    const subheader = [].concat(...athTiles, ...volTiles);

   return <Card key={"lessoncard_" + lesson.id} variant={"outlined"} style={{paddingBottom:"3px"}}>
        <CardHeader title={lesson.ltype} style={{paddingBottom:"2px"}}
        />
        <CardContent style={{padding:"5px"}}>
            {subheader}
        </CardContent>

    </Card>
}

LessonMatching.propTypes = {
    lesson: PropTypes.object.isRequired,
    lesson_master: PropTypes.object.isRequired,
    peeps: PropTypes.object.isRequired
}
