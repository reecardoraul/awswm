import React, {useEffect, useState} from 'react';
import {Typography, CircularProgress} from "@mui/material";
import axios from "axios";
import TimeslotCard from "./TimeslotCard";
import Paper from "@mui/material/Paper";

async function getTimeslots(set_timeslots) {
    axios.get("/timeslots")
        .catch(error => alert(error.message))
        .then(data => {
            if (data != null) {
                set_timeslots(data.data);
            } else {
                alert("Unable to fetch Timeslots!");
            }
        });
}

export default function Timeslots() {
    const [timeslots, setTimeslots] = useState([]);

    useEffect(() => {
        if (timeslots && timeslots.length === 0)
            getTimeslots(setTimeslots)
    }, [timeslots]);

    function getCard(timeslot) {
        return <TimeslotCard timeslot={timeslot} onSave={json => alert(JSON.stringify(json))}/>
    }

    return (
        <Paper variant={"outlined"}>
            <div style={{padding: "2.5px"}}>
                <Typography variant='caption' sx={{fontSize: 24}} color="text.secondary"
                            gutterBottom>Timeslots</Typography>
                {
                    timeslots.length === 0 ?
                        <CircularProgress/> :
                        timeslots.map(slot =>
                            getCard(slot))
                }
            </div>
        </Paper>

    );
}