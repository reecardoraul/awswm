import React, {useState} from 'react';
import {Card, CardContent, CardHeader, Typography} from "@mui/material";

import PropTypes from "prop-types";

import PeepTile from "./PeepTile";
import CardActions from "@mui/material/CardActions";

import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import {useFormik} from "formik";
import Backdrop from "@mui/material/Backdrop";
import PeepLister from "../PeepLister";

import IconButton from "@mui/material/IconButton";
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import PersonIcon from '@mui/icons-material/Person';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import DownhillSkiingIcon from '@mui/icons-material/DownhillSkiing';

const volunteer = "volunteer";
const coordinator = "coordinator";
const athlete = "student";
const volunteerIcon = <VolunteerActivismIcon/>
const athleteIcon = <DownhillSkiingIcon/>
const personIcon = <PersonIcon/>

export default function EditLesson({lesson, lesson_master, peeps, onSave, onCancel}) {
    const [lessonPeeps, setLessonPeeps] = useState(lesson_master);
    const [peepSearchOpen, setPeepSearchOpen] = useState(false);

    const handleClose = () => {
        setPeepSearchOpen(false);
    };
    const handleToggle = () => {
        setPeepSearchOpen(!peepSearchOpen);
    };

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            id: lesson.id ? lesson.id : '',
            ltype: lesson.ltype ? lesson.ltype : '',
            timeslot: lesson.timeslot ? lesson.timeslot : ''

        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    })

    const title = lesson.id ? lesson.ltype : "New Lesson";

    const getMasterPerson = (master_id) => {
        let retval = peeps.filter(person => person.id === master_id);

        if (retval.length === 1)
            return retval[0];
        else
            Window.alert("Unknown ID " + master_id);
    };

    const volunteers = lessonPeeps.filter(peep => {
        return peep.role.toLowerCase() === volunteer || peep.role.toLowerCase() === coordinator;
    });
    const athletes = lessonPeeps.filter(peep => peep.role.toLowerCase() === athlete);

    const volTiles = volunteers.map(peep => <PeepTile id={"l" + lesson.id + "m" + peep.id + "t"}
                                                      peep={getMasterPerson(peep.master_id)}
                                                      icon={volunteerIcon}/>);
    const athTiles = athletes.map(peep => <PeepTile id={"l" + lesson.id + "m" + peep.id + "t"}
                                                    peep={getMasterPerson(peep.master_id)} icon={athleteIcon}/>);

    const peepTiles = [].concat(...athTiles, ...volTiles);

    const addPeepToLesson = (peep) => {
        let newPeeps = [...lessonPeeps];
        let newPeep = { "master_id" : peep.id, "role" : peep.role, "lesson_id": lesson.id };
        newPeeps.push(newPeep);
        setLessonPeeps( newPeeps );
    }

    return <Card key={"editlessoncard_" + lesson.id} variant={"outlined"} style={{paddingBottom: "3px"}}>
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={peepSearchOpen}
            onClick={handleClose}
        >
            <PeepLister people={peeps} setPeep={addPeepToLesson} label="Add Person" icon={personIcon}/>
        </Backdrop>

        <CardHeader title={title} style={{paddingBottom: "2px"}}/>
        <CardContent>
          <form onSubmit={formik.handleSubmit}>
            <Typography sx={{fontSize: 18}} color="text.secondary">Timeslot</Typography>
            <RadioGroup aria-label="timeslot" name="timeslot"
                        value={formik.values.timeslot} onChange={formik.handleChange}
                        row={true} aria-required={true}>
                <FormControlLabel value="TUE" control={<Radio/>} label="Tuesday"/>
                <FormControlLabel value="WED" control={<Radio/>} label="Wednesday"/>
                <FormControlLabel value="THU" control={<Radio/>} label="Thursday"/>
                <FormControlLabel value="SUN1" control={<Radio/>} label="Sunday 1"/>
                <FormControlLabel value="SUN2" control={<Radio/>} label="Sunday 2"/>
                <FormControlLabel value="SUN3" control={<Radio/>} label="Sunday 3"/>
            </RadioGroup>
            <br/>
            <Typography sx={{fontSize: 18}} color="text.secondary">Lesson Type</Typography>
            <RadioGroup aria-label="Lesson Type" name="ltype"
                        value={formik.values.ltype} onChange={formik.handleChange}
                        row={true} aria-required={"true"}>
                <FormControlLabel value="BI" control={<Radio/>} label="Bi-Ski"/>
                <FormControlLabel value="MONO" control={<Radio/>} label="Moni-Ski"/>
                <FormControlLabel value="STANDUP" control={<Radio/>} label="Standup"/>
            </RadioGroup>
            <br/>
              <IconButton onClick={handleToggle}>
                  <PersonAddIcon color={"action"} fontSize={'large'}/>
              </IconButton>
            {peepTiles}
          </form>
        </CardContent>
        <CardActions disableSpacing style={{width: '98%', justifyContent: 'flex-end'}}>
            <IconButton onClick={onCancel}>
                <CancelIcon color={"action"} fontSize={'large'}/>
            </IconButton>
            <IconButton onClick={onSave}>
                <SaveIcon color={"disabled"} fontSize={'large'}/>
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