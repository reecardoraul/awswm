import React, {useState, useReducer} from 'react';
import PropTypes from 'prop-types';
import '../Auth.css'
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from "axios";

function reducer(state, action) {
    switch (action.type) {
        case 'initial':
            return {error: null, spinner: false};
        case 'submitted':
            return {error: null, spinner: true,};
        case 'error':
            return {error: action.error, spinner: false};
        default:
            throw new Error();
    }
}

async function send(ott, dispatch, setUserId, phoneNumber) {
    dispatch({type: 'submitted'});
    axios.post('auth/admin_ott', {'code':ott, 'phone_cell': phoneNumber})
        .then(data => {
            setUserId(data.data.person_id);
        })
        .catch(error => dispatch({type: 'error', error: error.message}))
}

export default function Verify({setUserId, phoneNumber}) {
    const [text, setText] = useState();

    const submitPhoneNumber = async e => {
        e.preventDefault();
        await send(text,dispatch,setUserId,phoneNumber)
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
            <h2>Verification</h2>
            {alert}
            <div className="form-div">
                <form onSubmit={submitPhoneNumber}>
                    <TextField id="ott" label="Verification Code" variant="outlined" onChange={e => setText(e.target.value)}/>
                    <br/>
                    <div>
                        <Button variant="contained" type="submit">Verify</Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

Verify.propTypes = {
    setUserId: PropTypes.func.isRequired,
    phoneNumber: PropTypes.func.isRequired
}