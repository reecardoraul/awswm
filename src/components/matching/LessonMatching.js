import React, {useState} from 'react';
import {Card, CardActionArea, CardContent, CardHeader, Collapse, IconButton} from "@mui/material";

import PropTypes from "prop-types";
import {ExpandLess, ExpandMore} from "@mui/icons-material";

export default function LessonMatching({lesson, lesson_master, peeps, onSave}) {
    const [expanded, setExpanded] = useState(false);

    const button = expanded ? <ExpandLess/> : <ExpandMore/>;

    const subheader = lesson_master.map( peep =>peep.master_id).join(",");

    return <Card key={"lessoncard_" + lesson.id} variant={"outlined"}>
        <CardActionArea
            onClick={() => setExpanded(!expanded)}
        >
            <CardHeader title={lesson.ltype}
                        subheader={subheader}
                        action={
                            <IconButton>
                                {button}
                            </IconButton>
                        }
            >
            </CardHeader>
        </CardActionArea>

        <Collapse in={expanded} unmountOnExit>
            <CardContent>

            </CardContent>
        </Collapse>
    </Card>
}

LessonMatching.propTypes = {
    lesson: PropTypes.object.isRequired,
    lesson_master: PropTypes.object.isRequired,
    peeps: PropTypes.object.isRequired,
    onSave: PropTypes.func.isRequired
}
