import React, {useState, useReducer, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import PropTypes from 'prop-types';
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import axios from "axios";
import {Avatar, IconButton, ImageListItem, List, ListItem, ListItemText} from "@mui/material";
import Typography from "@mui/material/Typography";
import ListItemAvatar from "@mui/material/ListItemAvatar";

function reducer(state, action) {
    switch (action.type) {
        case 'initial':
            return {error: null, spinner: false};
        case 'fetching':
            return {error: null, spinner: true};
        case 'error':
            return {error: action.error, spinner:false};
        default:
            throw new Error();
    }
}

async function setPeeps( dispatch, set_peeps, fetchUrl) {
    dispatch({type: 'fetching'});
    axios.get(fetchUrl)
        .catch(error => dispatch({type: 'error', error: error.message}))
        .then(data => {
            if (data != null) {
                set_peeps(data.data);
            }else{
                dispatch({type: 'error', error: "Unable to fetch!"})
            }
        });
}

export default function PeepLister({setPeep, nextPath, fetchUrl, icon, label}) {
    const initialState = {status: 'initial'};
    const [search, set_search] = useState();
    const [peeps, set_peeps] = useState([]);
    const [state, dispatch] = useReducer(reducer, initialState);
    const history = useHistory();

    useEffect( () => {
        if( peeps && peeps.length == 0)
            setPeeps(dispatch, set_peeps, fetchUrl)
    },[]);

    const handleClick = (vol) => {
        setPeep(vol);
        history.push(nextPath);
    }

    let alert;
    if( state.error ){
        alert = <Alert severity="error">{state.error}</Alert>
    }else{
        alert = <span></span>
    }

    const displayPeeps = search ? peeps.filter(peep =>
    {
        const search_string = search.toLowerCase();
        return peep.firstname.toLowerCase().includes(search_string) ||
            peep.lastname.toLowerCase().includes(search_string) ||
            peep.phone_primary.toLowerCase().includes(search_string);
    }) : peeps;

    return (
        <div >
            <Typography variant="h6" > {label ? label : "People"}</Typography>
            <div className="form-div">
                <TextField autoFocus label="Search" variant="outlined" onChange={e => set_search(e.target.value)}/>
            </div>
            {alert}
            <List sx={{width: '100%'}}>
                {displayPeeps.map((peep) => (
                    <ListItem
                        key={peep.id}
                        disableGutters
                        onClick={ () => handleClick(peep)}
                    >
                        <ListItemAvatar>
                            <Avatar>{icon}</Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={`${peep.lastname}, ${peep.firstname}`}/>
                    </ListItem>
                ))}
            </List>
        </div>
    );

}

PeepLister.propTypes = {
    setPeep: PropTypes.func.isRequired,
    nextPath: PropTypes.string.isRequired,
    fetchUrl: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
    label: PropTypes.string
}