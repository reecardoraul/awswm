import * as React from 'react';
import PropTypes from 'prop-types';
import LessonMatching from "./LessonMatching";
import Fab from "@mui/material/Fab";
import AddIcon from '@mui/icons-material/Add';
import {useState} from "react";
import EditLesson from "./EditLesson";

export default function MatchingLessons({timeslot, lessons, lesson_master, peeps, onSave, onDelete}) {
    const [newLesson, setNewLesson] = useState(null);

    const fabStyle = {
        position: 'absolute',
        top: 120,
        right: 16,
    };

    const cancelNewLesson = () => {
        setNewLesson(null)
    }
    const newLessonSave = (lesson) => {
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

    const regularView = <div>
        <Fab sx={fabStyle} color="primary" aria-label="Add Lesson" onClick={newLessonGo}>
            <AddIcon/>
        </Fab>

        {
            lessons.filter(lesson => lesson.timeslot === timeslot).map(lesson =>
                <LessonMatching key={"lessonMatching-" + lesson.id}
                                lesson={lesson}
                                lesson_master={lesson_master.filter(lm => lm.lesson_id === lesson.id)}
                                peeps={peeps}
                                onSave={onSave}
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