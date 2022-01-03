import * as React from 'react';
import PropTypes from 'prop-types';
import LessonMatching from "./LessonMatching";
import Zoom from '@mui/material/Zoom';
import Fab from "@mui/material/Fab";
import AddIcon from '@mui/icons-material/Add';
import {useState} from "react";
import EditLesson from "./EditLesson";
import {duration} from "@mui/material";

export default function MatchingLessons({timeslot, lessons, lesson_master, peeps, onSave, onDelete}) {
    const [newLesson, setNewLesson] = useState(null);

    const cancelNewLesson = () => {
        setNewLesson(null)
    }
    const newLessonSave = (lesson) => {
        onSave(lesson);
        setNewLesson(null)
    }
    const newLessonGo = () => {
        setNewLesson([])
    }

    const newView = <div>
        <EditLesson lesson={newLesson}
                    lesson_master={[]}
                    peeps={peeps}
                    onCancel={cancelNewLesson}
                    onSave={newLessonSave}
        />

    </div>

    const style = {
        margin: 0,
        top: 'auto',
        right: 20,
        bottom: 20,
        left: 'auto',
        position: 'fixed',

    };


    const regularView = <div>
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
                <LessonMatching key={"lessonMatching-" + lesson.id}
                                lesson={lesson}
                                lesson_master={lesson_master.filter(lm => lm.lesson_id === lesson.id)}
                                peeps={peeps}
                                onDelete={onDelete}
                />
            )
        }
    </div>

    return newLesson ? newView : regularView;
}

MatchingLessons.propTypes = {
    timeslot: PropTypes.object.isRequired,
    lessons: PropTypes.object.isRequired,
    lesson_master: PropTypes.object.isRequired,
    peeps: PropTypes.object.isRequired,
    onSave: PropTypes.func.isRequired,
    onAdd: PropTypes.func.isRequired
}