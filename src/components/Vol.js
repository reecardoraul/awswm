import React, {useState, useReducer} from 'react';
import PropTypes from 'prop-types';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Select from '@mui/material/Select';
import './Shared.css';
import axios from "axios";
import {Avatar, MenuItem} from "@mui/material";
import {Card, CardHeader, CardContent, Typography} from "@mui/material";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";

function reducer(state, action) {
    switch (action.type) {
        case 'initial':
            return {error: null, info: null, spinner: false};
        case 'saving':
            return {error: null, info: null, spinner: true};
        case 'error':
            return {error: action.error, info: null, spinner: false};
        case 'saved':
            return {error: action.error, info: "Saved", spinner: false};
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
    if (state.error) {
        alert = <Alert severity="error">{state.error}</Alert>
    } else if (state.info) {
        <Alert severity="info">{state.info}</Alert>
    } else {
        alert = <span></span>
    }

    let datePicker = <span></span>;
    //datePicker = <MobileDatePicker required id='birthdate' label='Birthdate' value={volunteer.birthdate}/>

    return (
        <div>
            <Typography variant='caption' sx={{ fontSize: 24 }} color="text.secondary" gutterBottom>Volunteer</Typography>
            <div className='right'>
                <Avatar><VolunteerActivismIcon/></Avatar>
            </div>

            {alert}

            <form onSubmit={saveVol}>
                <div className='form-div'>
                    <div className='form-element'><TextField fullWidth required id="first_name" label="First Name"
                                                             variant="outlined" value={display_vol.firstname}/></div>
                    <div className='form-element'><TextField fullWidth required id="last_name" label="Last Name"
                                                             variant="outlined" value={display_vol.lastname}/></div>
                    {datePicker}
                    <div className='form-element'><TextField fullWidth required id="phone_primary" label="Cell Phone"
                                                             variant="outlined" value={display_vol.phone_primary}/>
                    </div>
                    <div className='form-element'><TextField fullWidth id="phone_secondary" label="Other Phone"
                                                             variant="outlined" value={display_vol.phone_secondary || ''}/>
                    </div>
                    <div className='form-element'><TextField fullWidth required id="email" label="Email"
                                                             variant="outlined" value={display_vol.email}/></div>

                    <div>
                        <div className='form-element'><TextField fullWidth id="address" label="Address"
                                                                 variant="outlined" value={display_vol.address || ''}/></div>
                        <div className='form-element'><TextField fullWidth id="city" label="City" variant="outlined"
                                                                 value={display_vol.city || ''}/></div>
                        <div className='form-element'><TextField fullWidth id="state" label="State" variant="outlined"
                                                                 value={display_vol.state || ''}/></div>
                        <div className='form-element'><TextField fullWidth id="zip" label="Zip" variant="outlined"
                                                                 value={display_vol.zip || ''}/></div>
                    </div>
                    <div>
                        <div className='form-element'><TextField fullWidth id="occupation" label="Occupation"
                                                                 variant="outlined" value={display_vol.occupation || ''}/>
                        </div>
                        <div className='form-element'><TextField fullWidth id="how_heard_of"
                                                                 label="How did you hear about us?" variant="outlined"
                                                                 value={display_vol.how_heard_of || ''}/></div>
                        <div className='form-element'><TextField fullWidth id="previous_years"
                                                                 label="Years with the program?" variant="outlined"
                                                                 value={display_vol.previous_years || ''} inputProps={{
                            inputMode: 'numeric',
                            pattern: '[0-9]*'
                        }}/></div>
                        <div className='form-element'>
                            <Select id='skilevel' labelId='skilevel_label' label='Ski Proficiency'
                                    value={display_vol.skilevel}>
                                <MenuItem value='advanced'>Advanced</MenuItem>
                                <MenuItem value='intermediate'>Intermediate</MenuItem>
                                <MenuItem value='beginner'>Beginner</MenuItem>
                                <MenuItem value='non-skier'>Non-Skier</MenuItem>
                            </Select>
                        </div>
                    </div>
                    <Card variant="outlined">
                        <Typography sx={{fontSize: 14}} color="text.secondary">Training Desired:</Typography>
                        Sit Down <Checkbox id="training_sit" label="Sit Ski" value={display_vol.training_sit}/>
                        Standup<Checkbox id="training_stand" label="Standup" value={display_vol.training_stand}/>
                        <div className='form-element'>Comfortable taking athlete on chairlfit?
                            <Checkbox id="can_chair"
                                label="Comfortable taking athelete on chairlift?"
                                value={display_vol.can_chair}>Comfortable w/ athlete on chairlift?</Checkbox>
                        </div>
                    </Card>

                    <div className="section">
                        <b>Availability</b><br/>
                        Tuesday 6-8p<Checkbox id="tuesday" label="Tuesday 6-8p" value={display_vol.tuesday}>Tuesday
                        6-8p</Checkbox>
                        Wednesday 6-8p<Checkbox id="wednesday" label="Wednesday 6-8p" value={display_vol.wednesday}>Wednesday
                        6-8p</Checkbox>
                        Thursday 6-8p<Checkbox id="thursday" label="Thursday 6-8p" value={display_vol.thursday}>Thursday
                        6-8p</Checkbox>
                        Sunday 1-3p<Checkbox id="sunday1" label="Sunday 1-3p" value={display_vol.sunday1}>Sunday
                        1-3p</Checkbox>
                        Sunday 2-4p<Checkbox id="sunday2" label="Sunday 2-4p" value={display_vol.sunday2}>Sunday
                        2-4p</Checkbox>
                        Sunday 3-5p<Checkbox id="sunday3" label="Sunday 3-5p" value={display_vol.sunday3}>Sunday
                        3-5p</Checkbox>
                    </div>
                    <div>
                        <Button variant="contained" type="submit">Save</Button>
                    </div>
                </div>
            </form>
        </div>
);

}

Vol.propTypes = {
    volunteer: PropTypes.object.isRequired
}