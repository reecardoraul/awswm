import React from 'react';
import {Card, CardContent, CardHeader, Typography} from "@mui/material";

import PropTypes from "prop-types";
import PeepTile from "./PeepTile";

export default function LessonMatching({lesson, yearInfo}) {
    const peeps = yearInfo.people;
    const lesson_master = yearInfo.lesson_master.filter(lm => lm.lesson_id === lesson.id)
    const volunteers = lesson_master.filter(peep => peep.role === "VOLUNTEER");

    const getMasterPerson = (master_id) => {
        let retval = peeps.filter(person => person.id === master_id);

        if (retval.length === 1)
            return retval[0];
        else
            Window.alert("Unknown ID " + master_id);
    };

    const athletes = lesson_master.filter(peep => peep.role === "STUDENT");

    const volTiles = volunteers.map(peep => <PeepTile key={"l" + lesson.id + "m" + peep.id + "t"}
                                                      peep={getMasterPerson(peep.master_id)}/>);
    const athTiles = athletes.map(peep => <PeepTile key={"l" + lesson.id + "m" + peep.id + "t"}
                                                    peep={getMasterPerson(peep.master_id)}/>);

    const subheader = [...athTiles, ...volTiles];

   return <Card variant={"outlined"}>
        <CardContent style={{padding:"5px"}}>
            <Typography variant='caption' sx={{fontSize: 24, padding: "2px"}} color="text.secondary" gutterBottom >{lesson.ltype} </Typography>
            {subheader}
        </CardContent>

    </Card>
}

LessonMatching.propTypes = {
    yearInfo: PropTypes.object.isRequired,
    peeps: PropTypes.array.isRequired
}
