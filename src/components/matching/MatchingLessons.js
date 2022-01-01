import * as React from 'react';
import PropTypes from 'prop-types';
import LessonMatching from "./LessonMatching";

export default function MatchingLessons({lessons, lesson_master, peeps, onSave}) {

    return <div>{
        lessons.map( lesson =>
        <LessonMatching key={"lessonMatching-" + lesson.id }
                        lesson={lesson}
                        lesson_master={lesson_master.filter( lm => lm.lesson_id == lesson.id)}
                        peeps={peeps}
                        onSave={onSave}/>
        )
    }
    </div>

}

MatchingLessons.propTypes = {
    lessons: PropTypes.object.isRequired,
    lesson_master: PropTypes.object.isRequired,
    peeps: PropTypes.object.isRequired,
    onSave: PropTypes.func.isRequired
}