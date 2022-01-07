import * as React from 'react';
import PropTypes from 'prop-types';
import LessonMatching from "./LessonMatching";
import Zoom from '@mui/material/Zoom';
import Fab from "@mui/material/Fab";
import AddIcon from '@mui/icons-material/Add';
import {useState} from "react";
import EditLesson from "./EditLesson";
import {CardActionArea, duration} from "@mui/material";
import Dialog from "@mui/material/Dialog";

export default function MatchingLessons({timeslot, yearInfo, onSave, onDelete}) {
    const [current_lesson, setNewLesson] = useState(null);

    const cancelNewLesson = () => {
        setNewLesson(null)
    }
    const newLessonSave = (lesson) => {
        onSave(lesson);
        setNewLesson(null)
    }
    const newLessonGo = () => {
        setNewLesson({timeslot: timeslot})
    }

    const style = {
        margin: 0,
        top: 45,
        right: 20,
        bottom: 'auto',
        left: 'auto',
        position: 'absolute',

    };

    return <div>
        <Dialog
            fullScreen
            open={!!current_lesson}
            onClose={cancelNewLesson}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <EditLesson lesson={current_lesson}
                        lesson_master={
                            (current_lesson && current_lesson.id) ? yearInfo.lesson_master.filter(lm => lm.lesson_id === current_lesson.id)
                                : []
                        }
                        yearInfo={yearInfo}
                        onCancel={cancelNewLesson}
                        onSave={newLessonSave}
            />
        </Dialog>
        <Zoom
            style={style}
            in={true}
            timeout={duration.enteringScreen}
            unmountOnExit
        >
            <Fab color="primary" aria-label="Add Lesson" onClick={newLessonGo} variant="extended">
                Add Lesson
                <AddIcon/>
            </Fab>
        </Zoom>

        {
            yearInfo.lessons.filter(lesson => lesson.timeslot === timeslot).map(lesson =>
                <CardActionArea
                    style={{paddingBottom: "2px"}}
                    key={"lessonMatching-" + lesson.id}
                    onClick={() => setNewLesson(lesson)}
                >
                    <LessonMatching
                        lesson={lesson}
                        yearInfo={yearInfo}
                        onDelete={onDelete}
                    />
                </CardActionArea>
            )
        }
    </div>
}

MatchingLessons.propTypes = {
    timeslot: PropTypes.string.isRequired,
    yearInfo: PropTypes.object.isRequired,
    onSave: PropTypes.func.isRequired
}