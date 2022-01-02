import React from 'react';
import PropTypes from 'prop-types';
import {Avatar, Typography} from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";

export default function PeepTile({peep, icon}) {
    return <Card>
        <CardHeader
            avatar={<Avatar>{icon}</Avatar>}
           title = {peep.lastname + ", " + peep.firstname}
        />
    </Card>
}

PeepTile.propTypes = {
    peep: PropTypes.object.isRequired,
    icon: PropTypes.object.isRequired
}