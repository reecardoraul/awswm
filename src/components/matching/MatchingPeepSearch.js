import React from 'react';
import PropTypes from "prop-types";
import PeepLister from "../PeepLister";
import {CardContent, Paper} from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';

export default function MatchingPeepSearch({setPeep, season, timeslot, people, person_lesson}) {
    const personIcon = <PersonIcon/>

    return <CardContent>
        <PeepLister people={people} setPeep={setPeep} label="Add People" icon={personIcon}/>
    </CardContent>

}

MatchingPeepSearch.propTypes = {
    setPeep: PropTypes.func.isRequired,
    season: PropTypes.string,
    timeslot: PropTypes.string,
    people: PropTypes.array.isRequired,
    person_lesson: PropTypes.array.isRequired
}
