import React, {useState} from 'react';
import PropTypes from "prop-types";
import PeepLister from "../PeepLister";
import {CardContent, CardHeader, Paper} from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';

export default function MatchingPeepSearch({setPeep, season, timeslot, people, person_lesson}) {

    const cardTitle = "Search People";
    const personIcon = <PersonIcon/>

    return <Paper>
        <CardHeader title={cardTitle}></CardHeader>
        <CardContent>
            <PeepLister people={people} setPeep={setPeep} label="Add Person" icon={personIcon}/>
        </CardContent>
    </Paper>
}

PeepLister.propTypes = {
    setPeep: PropTypes.func.isRequired,
    season: PropTypes.string,
    timeslot: PropTypes.string,
    people: PropTypes.array.isRequired,
    person_lesson: PropTypes.array.isRequired
}
