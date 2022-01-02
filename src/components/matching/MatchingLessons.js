import * as React from 'react';
import PropTypes from 'prop-types';
import LessonMatching from "./LessonMatching";
import Fab from "@mui/material/Fab";
import AddIcon from '@mui/icons-material/Add';

export default function MatchingLessons({lessons, lesson_master, peeps, onSave, onDelete}) {
    const fabStyle = {
        position: 'absolute',
        top: 120,
        right: 16,
    };

    return <div>
        <Fab sx={fabStyle} color="primary" aria-label="Add Lesson">
            <AddIcon/>
        </Fab>
        {
            lessons.map(lesson =>
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

}

MatchingLessons.propTypes = {
    lessons: PropTypes.object.isRequired,
    lesson_master: PropTypes.object.isRequired,
    peeps: PropTypes.object.isRequired,
    onSave: PropTypes.func.isRequired,
    onAdd: PropTypes.func.isRequired
}