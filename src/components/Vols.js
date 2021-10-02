import React, {useState, useReducer, useEffect} from 'react';
import PropTypes from 'prop-types';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from "axios";
import Phone from './auth/Phone';
import Verify from './auth/Verify';
import {IconButton, List, ListItem, ListItemText} from "@mui/material";

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

async function setVols( dispatch, set_vols) {
    axios.get('volunteers/')
        .catch(error => dispatch({type: 'error', error: error.message}))
        .then(data => {
            if (data != null) {
                dispatch({type: 'fetching'});
                set_vols(data.data);
            }else{
                dispatch({type: 'error', error: "Unable to fetch volunteers!"})
            }
        });
}

export default function Vols() {
    const initialState = {status: 'initial'};
    const [vols, set_vols] = useState([]);
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(async () => {
        if( vols.length == 0)
            setVols(dispatch, set_vols)
    });

    let alert;
    if( state.error ){
        alert = <Alert severity="error">{state.error}</Alert>
    }else{
        alert = <span></span>
    }

    return (
        <div >
            <h3>Volunteers</h3>

            {alert}
            <List sx={{width: '100%'}}>
                {vols.map((vol) => (
                    <ListItem
                        key={vols.id}
                        disableGutters
                        secondaryAction={
                            <IconButton>
                            </IconButton>
                        }
                    >
                        <ListItemText primary={`${vol.lastname}, ${vol.firstname}`} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

}

Vols.propTypes = {

}