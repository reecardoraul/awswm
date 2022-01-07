import React from 'react';
import PropTypes from "prop-types";
import PeepLister from "../PeepLister";
import {CardContent, Paper} from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';

export default function MatchingPeepSearch({setPeep, season, timeslot, yearInfo, person_lesson}) {
    const personIcon = <PersonIcon/>

    const matched = person_lesson.map( pl => pl.master_id );

    const timeslot_peeps = yearInfo.people.filter( p => {
        if( timeslot === "TUE" )
            return p.tuesday;
        if( timeslot === "WED" )
            return p.wednesday;
        if( timeslot === "THU" )
            return p.thursday;
        if( timeslot === "SUN1" )
            return p.sunday1;
        if( timeslot === "SUN2" )
            return p.sunday2;
        if( timeslot === "SUN3" )
            return p.sunday3;
        return false;
    } );

    const people = timeslot_peeps;

    return <CardContent>
        <PeepLister people={people} setPeep={setPeep} label="Add People" icon={personIcon}/>
    </CardContent>

}

MatchingPeepSearch.propTypes = {
    setPeep: PropTypes.func.isRequired,
    season: PropTypes.string,
    timeslot: PropTypes.string,
    yearInfo: PropTypes.object.isRequired,
    person_lesson: PropTypes.array.isRequired
}
