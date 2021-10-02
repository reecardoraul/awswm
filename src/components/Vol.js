import React, {useState, useReducer} from 'react';
import PropTypes from 'prop-types';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from "axios";

function reducer(state, action) {
    switch (action.type) {
        case 'initial':
            return {error: null, info: null, spinner: false};
        case 'saving':
            return {error: null, info: null, spinner: true};
        case 'error':
            return {error: action.error, info: null, spinner:false};
        case 'saved':
            return {error: action.error, info: "Saved", spinner:false};
        default:
            throw new Error();
    }
}

// async function saveVol( volunteer, dispatch) {
//     axios.get('volunteers/')
//         .catch(error => dispatch({type: 'error', error: error.message}))
//         .then(data => {
//             if (data != null) {
//                 dispatch({type: 'fetching'});
//                 set_vols(data.data);
//             }else{
//                 dispatch({type: 'error', error: "Unable to fetch volunteers!"})
//             }
//         });
// }

export default function Vol({volunteer}) {
    const initialState = {status: 'initial'};
    const [vol, setVol] = useState({});
    const [state, dispatch] = useReducer(reducer, initialState);

    const saveVol = async e => {
        e.preventDefault();
        //await saveVol(volunteer, dispatch)
    }

    let display_vol = volunteer ? volunteer : vol;

    let alert;
    if( state.error ){
        alert = <Alert severity="error">{state.error}</Alert>
    }else if (state.info ) {
        <Alert severity="info">{state.info}</Alert>
    }else{
        alert = <span></span>
    }

    let datePicker = <span></span>;
    //datePicker = <MobileDatePicker required id='birthdate' label='Birthdate' value={volunteer.birthdate}/>

    return (
        <div >
            <h3>Volunteer</h3>

            {alert}

            <form onSubmit={saveVol}>
                <TextField fullWidth required id="first_name" label="First Name" variant="outlined" value={display_vol.firstname}/>
                <TextField fullWidth required id="last_name" label="Last Name" variant="outlined" value={display_vol.lastname}/>
                {datePicker}
                <TextField fullWidth required id="phone_primary" label="Cell Phone" variant="outlined" value={display_vol.phone_primary}/>
                <TextField fullWidth id="phone_secondary" label="Other Phone" variant="outlined" value={display_vol.phone_secondary}/>
                <TextField fullWidth required id="email" label="Email" variant="outlined" value={display_vol.phone_secondary}/>

                <div>
                    <TextField fullWidth id="address" label="Address" variant="outlined" value={display_vol.address}/>
                    <TextField fullWidth id="city" label="City" variant="outlined" value={display_vol.city}/>
                    <TextField fullWidth id="state" label="State" variant="outlined" value={display_vol.state}/>
                    <TextField fullWidth id="zip" label="Zip" variant="outlined" value={display_vol.zip}/>
                </div>
                <div>
                    <TextField fullWidth id="occupation" label="Occupation" variant="outlined" value={display_vol.occupation}/>
                    <TextField fullWidth id="how_heard_of" label="How did you hear about AWSWM" variant="outlined" value={display_vol.how_heard_of}/>
                    <TextField fullWidth id="previous_years" label="Years with AWSWM" variant="outlined" value={display_vol.previous_years} inputProps={{inputMode:'numeric', pattern: '[0-9]*'}}/>
                </div>
                <div>
                    <Button variant="contained" type="submit">Save</Button>
                </div>
            </form>
        </div>
    );

}

Vol.propTypes = {
    volunteer: PropTypes.object.isRequired
}