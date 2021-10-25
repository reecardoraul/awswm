import React, {useState, useReducer} from 'react';
import PropTypes from 'prop-types';
import '../Auth.css'
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from "axios";
import {isMobile} from 'react-device-detect';


function reducer(state, action) {
    switch (action.type) {
        case 'initial':
            return {error: null, spinner: false};
        case 'submitted':
            return {error: null, spinner: true};
        case 'error':
            return {error: action.error, spinner: false};
        default:
            throw new Error();
    }
}

async function send(phone_number, dispatch, setPhone) {
    dispatch({type: 'submitted'});
    axios.post('/auth/admin_sms', {"phone_cell": phone_number})
        .then(response => {
            setPhone(phone_number)
        })
        .catch(error =>{
            dispatch({type: 'error', error: error.message})
        });
}

export default function Phone({setPhone}) {
    const [text, setText] = useState();

    const submitPhoneNumber = async e => {
        e.preventDefault();
        await send(text,dispatch,setPhone)
    }

    const initialState = {status: 'initial', err: null};
    const [state, dispatch] = useReducer(reducer, initialState);

    let alert;
    if( state.error ){
        alert = <Alert severity="error">{state.error}</Alert>
    }else{
        alert = <span></span>
    }

    return (
        <div className="login-wrapper">
            <h2>Authenticate</h2>
            {alert}
            <div className="form-div">
                <form onSubmit={submitPhoneNumber}>
                    <TextField autoFocus={!isMobile} id="phone_number" label="Phone Number" variant="outlined" onChange={e => setText(e.target.value)}/>
                    <br/>
                    <div className="centered">
                        <Button disabled={state.spinner} variant="contained" type="submit">authenticate</Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

Phone.propTypes = {
    setPhone: PropTypes.func.isRequired
}