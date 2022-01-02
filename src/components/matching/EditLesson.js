import React from 'react';
import {Card, CardContent, CardHeader, Typography} from "@mui/material";

import PropTypes from "prop-types";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import DownhillSkiingIcon from '@mui/icons-material/DownhillSkiing';
import PeepTile from "./PeepTile";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";

export default function EditLesson({lesson, lesson_master, peeps, onSave, onCancel}) {
    const title = lesson.id ? lesson.ltype : "New Lesson";
    const volunteerIcon = <VolunteerActivismIcon/>
    const athleteIcon = <DownhillSkiingIcon/>

    const getMasterPerson = (master_id) => {
        let retval = peeps.filter(person => person.id === master_id);

        if (retval.length === 1)
            return retval[0];
        else
            Window.alert("Unknown ID " + master_id);
    };

    const volunteers = lesson_master.filter(peep => peep.role === "VOLUNTEER");
    const athletes = lesson_master.filter(peep => peep.role === "STUDENT");

    const volTiles = volunteers.map(peep => <PeepTile id={"l" + lesson.id + "m" + peep.id + "t"}
                                                      peep={getMasterPerson(peep.master_id)}
                                                      icon={volunteerIcon}/>);
    const athTiles = athletes.map(peep => <PeepTile id={"l" + lesson.id + "m" + peep.id + "t"}
                                                    peep={getMasterPerson(peep.master_id)} icon={athleteIcon}/>);

    const peepTiles = [].concat(...athTiles, ...volTiles);

    return <Card key={"editlessoncard_" + lesson.id} variant={"outlined"} style={{paddingBottom:"3px"}}>
        <CardHeader title={title} style={{paddingBottom:"2px"}}/>
        <CardContent>
            <Typography sx={{fontSize: 18}} color="text.secondary">Timeslot</Typography>
            <RadioGroup row={true}>
                <FormControlLabel value="TUE" control={<Radio/>} label="Tuesday"/>
                <FormControlLabel value="WED" control={<Radio/>} label="Wednesday"/>
                <FormControlLabel value="THU" control={<Radio/>} label="Thursday"/>
                <FormControlLabel value="SUN1" control={<Radio/>} label="Sunday 1"/>
                <FormControlLabel value="SUN2" control={<Radio/>} label="Sunday 2"/>
                <FormControlLabel value="SUN3" control={<Radio/>} label="Sunday 3"/>
            </RadioGroup>
            <br/>
            <Typography sx={{fontSize: 18}} color="text.secondary">Lesson Type</Typography>
            <RadioGroup row={true}>
                <FormControlLabel value="BI" control={<Radio/>} label="Bi-Ski"/>
                <FormControlLabel value="MONO" control={<Radio/>} label="Moni-Ski"/>
                <FormControlLabel value="STANDUP" control={<Radio/>} label="Standup"/>
            </RadioGroup>
            <br/>
            { peepTiles }
        </CardContent>
        <CardActions disableSpacing style={{ width: '98%', justifyContent: 'flex-end'}}>
            <IconButton onClick={onCancel}>
                <CancelIcon color={"action"} fontSize={'large'}/>
            </IconButton>
            <IconButton onClick={onSave}>
                <SaveIcon color={"action"} fontSize={'large'}/>
            </IconButton>
        </CardActions>
    </Card>
}

EditLesson.propTypes = {
    lesson: PropTypes.object.isRequired,
    lesson_master: PropTypes.object.isRequired,
    peeps: PropTypes.object.isRequired,
    onSave: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired
}