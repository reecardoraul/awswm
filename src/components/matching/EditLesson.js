import React, {useState} from 'react';
import {Card, CardContent, CardHeader, Paper, Typography} from "@mui/material";

import PropTypes from "prop-types";

import CardActions from "@mui/material/CardActions";

import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import {useFormik} from "formik";

import IconButton from "@mui/material/IconButton";
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DeleteIcon from '@mui/icons-material/Delete';
import MatchingPeepSearch from "./MatchingPeepSearch";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import PeepTileClick from "./PeepTileClick";

const volunteer = "volunteer";
const coordinator = "coordinator";
const athlete = "student";

export default function EditLesson({lesson, yearInfo, onSave, onCancel}) {
    const lesson_master =
        (lesson && lesson.id) ? yearInfo.lesson_master.filter(lm => lm.lesson_id === lesson.id)
            : [];
    const [lessonPeeps, setLessonPeeps] = useState(lesson_master);
    const [peepSearchOpen, setPeepSearchOpen] = useState(false);

    const handleClose = () => {
        setPeepSearchOpen(false);
    };
    const handleToggle = () => {
        setPeepSearchOpen(!peepSearchOpen);
    };

    const formik = useFormik({
        initialValues: {
            id: lesson && lesson.id ? lesson.id : '',
            ltype: lesson && lesson.ltype ? lesson.ltype : '',
            timeslot: lesson && lesson.timeslot ? lesson.timeslot : '',
            year: lesson && lesson.year ? lesson.year : ''
        },
        onSubmit: (values) => {
            values.people = lessonPeeps.map(peep => ({
                master_id: (peep.master_id ? peep.master_id : peep.id),
                role: peep.role
            }));
            if (values.id === "") {
                values.id = undefined;
            }
            onSave(values);
        },
    })

    const title = lesson && lesson.id ? "Edit Lesson" : "New Lesson";

    const getMasterPerson = (master_id) => {
        let retval = yearInfo.people.filter(person => person.id === master_id);

        if (retval.length === 1)
            return retval[0];
    };

    const volunteers = lessonPeeps.filter(peep => {
        return peep.role.toLowerCase() === volunteer || peep.role.toLowerCase() === coordinator;
    });
    const athletes = lessonPeeps.filter(peep => peep.role.toLowerCase() === athlete);

    const lessonPeopleSorted = [...athletes, ...volunteers]

    const saveable = formik.values.ltype && formik.values.timeslot && lessonPeeps.length > 0;

    const addTimeslot = formik.values.timeslot ? formik.values.timeslot : lesson ?  lesson.timeslot : "TUE"

    const peepClicked = (peep) => {
        let newPeeps = [...lessonPeeps];
        let filtered = newPeeps.filter(oldPeep => oldPeep.master_id !== peep.id)
        setLessonPeeps(filtered);
    }

    const addPeepToLesson = (peep) => {
        let newPeeps = [...lessonPeeps];
        let newPeep = {"master_id": peep.id, "role": peep.role, "lesson_id": lesson ? lesson.id : ""};
        newPeeps.push(newPeep);
        setLessonPeeps(newPeeps);
        setPeepSearchOpen(false);
    }

    const topRight = {
        margin: 0,
        top: 3,
        right: 3,
        bottom: 'auto',
        left: 'auto',
        position: 'absolute',
    };

    return <Card variant={"outlined"} style={{paddingBottom: "3px"}}>
        <Modal
            open={peepSearchOpen}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Paper>
                <MatchingPeepSearch
                    yearInfo={yearInfo}
                    setPeep={addPeepToLesson}
                    person_lesson={lesson_master}
                    timeslot={addTimeslot}
                />
            </Paper>
        </Modal>

        <CardHeader title={title} style={{paddingBottom: "2px"}}/>
        <form onSubmit={formik.handleSubmit}>
            <CardContent>
                <IconButton style={topRight} onClick={onCancel}>
                    <CancelIcon color={"action"} fontSize={'large'}/>
                </IconButton>

                <Typography sx={{fontSize: 18}} color="text.secondary">Timeslot</Typography>
                <RadioGroup aria-label="timeslot" name="timeslot"
                            value={formik.values.timeslot} onChange={formik.handleChange}
                            row={true} aria-required={true}>
                    <FormControlLabel value="TUE" control={<Radio/>} label="Tue"/>
                    <FormControlLabel value="WED" control={<Radio/>} label="Wed"/>
                    <FormControlLabel value="THU" control={<Radio/>} label="Thu"/>
                    <FormControlLabel value="SUN1" control={<Radio/>} label="Sun1"/>
                    <FormControlLabel value="SUN2" control={<Radio/>} label="Sun2"/>
                    <FormControlLabel value="SUN3" control={<Radio/>} label="Sun3"/>
                </RadioGroup>
                <br/>
                <Typography sx={{fontSize: 18}} color="text.secondary">Lesson Type</Typography>
                <RadioGroup aria-label="Lesson Type" name="ltype"
                            value={formik.values.ltype} onChange={formik.handleChange}
                            row={true} aria-required={"true"}>
                    <FormControlLabel value="BI" control={<Radio/>} label="Bi-Ski"/>
                    <FormControlLabel value="MONO" control={<Radio/>} label="Mono-Ski"/>
                    <FormControlLabel value="STANDUP" control={<Radio/>} label="Standup"/>
                    <FormControlLabel value="FLOAT" control={<Radio/>} label="Float"/>
                </RadioGroup>
                <br/>

                {
                    lessonPeopleSorted.map(lessonPerson =>

                        <PeepTileClick key={"l" + (lesson ? lesson.id : "") + "m" + lessonPerson.id + "t"}
                                       peep={getMasterPerson(lessonPerson.master_id)}
                                       onClick={peepClicked}
                        />
                    )
                }
                <Button onClick={handleToggle} variant="outlined" startIcon={<PersonAddIcon fontSize={'large'}/>}>Add
                    Person
                </Button>

            </CardContent>
            <CardActions disableSpacing style={{width: '98%', justifyContent: 'flex-end'}}>
                <IconButton>
                    <DeleteIcon fontSize={'large'}/>
                </IconButton>
                <IconButton disabled={!saveable} type={"submit"}>
                    <SaveIcon color={saveable ? "primary" : "disabled"} fontSize={'large'}/>
                </IconButton>
            </CardActions>
        </form>
    </Card>
}

EditLesson.propTypes = {
    lesson: PropTypes.object,
    yearInfo: PropTypes.object.isRequired,
    onSave: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired
}