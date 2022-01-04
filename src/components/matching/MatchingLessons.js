import * as React from 'react';
import PropTypes from 'prop-types';
import LessonMatching from "./LessonMatching";
import Zoom from '@mui/material/Zoom';
import Fab from "@mui/material/Fab";
import AddIcon from '@mui/icons-material/Add';
import {useState} from "react";
import EditLesson from "./EditLesson";
import {CardActionArea, duration} from "@mui/material";
import Grow from "@mui/material/Grow";
import { TransitionGroup } from 'react-transition-group';
import Modal from "@mui/material/Modal";

export default function MatchingLessons({timeslot, lessons, lesson_master, peeps, onSave, onDelete}) {
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

    const editView =
            <EditLesson lesson={current_lesson}
                        lesson_master={
                            (current_lesson && current_lesson.id) ? lesson_master.filter(lm => lm.lesson_id === current_lesson.id)
                                : []
                        }
                        peeps={peeps}
                        onCancel={cancelNewLesson}
                        onSave={newLessonSave}
            />

    const style = {
        margin: 0,
        top: 45,
        right: 20,
        bottom: 'auto',
        left: 'auto',
        position: 'absolute',

    };

    return <div>
        <Modal
            open={!!current_lesson}
            onClose={cancelNewLesson}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >{editView}
        </Modal>
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
            lessons.filter(lesson => lesson.timeslot === timeslot).map(lesson =>
                <CardActionArea
                    onClick={() => setNewLesson(lesson)}
                >
                    <LessonMatching key={"lessonMatching-" + lesson.id}
                                    lesson={lesson}
                                    lesson_master={lesson_master.filter(lm => lm.lesson_id === lesson.id)}
                                    peeps={peeps}
                                    onDelete={onDelete}
                    />
                </CardActionArea>
            )
        }
    </div>
}

MatchingLessons.propTypes = {
    timeslot: PropTypes.object.isRequired,
    lessons: PropTypes.object.isRequired,
    lesson_master: PropTypes.object.isRequired,
    peeps: PropTypes.object.isRequired,
    onSave: PropTypes.func.isRequired,
    onAdd: PropTypes.func.isRequired
}