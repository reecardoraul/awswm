import React, {useReducer} from 'react';
import PropTypes from 'prop-types';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Select from '@mui/material/Select';
import './Shared.css';
import {Avatar, MenuItem, Card, Typography, CardHeader, CardContent, FormControl} from "@mui/material";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import {useFormik} from "formik";
import {isMobile} from 'react-device-detect';
import InputLabel from "@mui/material/InputLabel";
import FormControlLabel from "@mui/material/FormControlLabel";

function reducer(state, action) {
    switch (action.type) {
        case 'initial':
            return {error: null, info: null, spinner: false};
        case 'saving':
            return {error: null, info: null, spinner: true};
        case 'error':
            return {error: action.error, info: null, spinner: false};
        case 'saved':
            return {error: null, info: "Saved", spinner: false};
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
    const [state, dispatch] = useReducer(reducer, initialState);

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            id: volunteer.id ? volunteer.id : '',
            birthdate: volunteer.birthdate ? volunteer.birthdate : '',
            lastname: volunteer.lastname ? volunteer.lastname : '',
            firstname: volunteer.firstname ? volunteer.firstname : '',
            address: volunteer.address ? volunteer.address : '',
            city: volunteer.city ? volunteer.city : '',
            state: volunteer.state ? volunteer.state : '',
            zip: volunteer.zip ? volunteer.zip : '',
            phone_primary: volunteer.phone_primary ? volunteer.phone_primary : '',
            phone_secondary: volunteer.phone_secondary ? volunteer.phone_secondary : '',
            email: volunteer.email ? volunteer.email : '',
            occupation: volunteer.occupation ? volunteer.occupation : '',
            how_heard_of: volunteer.how_heard_of ? volunteer.how_heard_of : '',
            previous_years: volunteer.previous_years ? volunteer.previous_years : '',
            notes: volunteer.notes ? volunteer.notes : '',
            training_sit: volunteer.training_sit ? volunteer.training_sit : '',
            training_stand: volunteer.training_stand ? volunteer.training_stand : '',
            skilevel: volunteer.skilevel ? volunteer.skilevel : '',
            can_chair: volunteer.can_chair ? volunteer.can_chair : '',
            student_name: volunteer.student_name ? volunteer.student_name : '',
            committee_equipment: volunteer.committee_equipment ? volunteer.committee_equipment : '',
            committee_fundraising: volunteer.committee_fundraising ? volunteer.committee_fundraising : '',
            committee_web: volunteer.committee_web ? volunteer.committee_web : '',
            committee_mail: volunteer.committee_mail ? volunteer.committee_mail : '',
            committee_special_events: volunteer.committee_special_events ? volunteer.committee_special_events : '',
            tuesday: volunteer.tuesday ? volunteer.tuesday : '',
            wednesday: volunteer.wednesday ? volunteer.wednesday : '',
            thursday: volunteer.thursday ? volunteer.thursday : '',
            sunday1: volunteer.sunday1 ? volunteer.sunday1 : '',
            sunday2: volunteer.sunday2 ? volunteer.sunday2 : '',
            sunday3: volunteer.sunday3 ? volunteer.sunday3 : '',
            emer_contact: volunteer.emer_contact ? volunteer.emer_contact : '',
            emer_contact_primary_phone: volunteer.emer_contact_primary_phone ? volunteer.emer_contact_primary_phone : '',
            emer_contact_secondary_phone: volunteer.emer_contact_secondary_phone ? volunteer.emer_contact_secondary_phone : '',
            donation_amount: volunteer.donation_amount ? volunteer.donation_amount : '',
            create_date: volunteer.create_date ? volunteer.create_date : '',
            master_id: volunteer.master_id ? volunteer.master_id : '',
            multiple_lessons: volunteer.multiple_lessons ? volunteer.multiple_lessons : '',
            paid: volunteer.paid ? volunteer.paid : '',
            paid_note: volunteer.paid_note ? volunteer.paid_note : '',
            update_by: volunteer.update_by ? volunteer.update_by : '',
            update_date: volunteer.update_date ? volunteer.update_date : '',
            create_by: volunteer.create_by ? volunteer.create_by : '',
            needs_rentals: volunteer.needs_rentals ? volunteer.needs_rentals : '',
            committee_training: volunteer.committee_training ? volunteer.committee_training : '',
            committee_pr: volunteer.committee_pr ? volunteer.committee_pr : '',
            committee_board: volunteer.committee_board ? volunteer.committee_board : '',
            release: volunteer.release ? volunteer.release : '',
            dryland: volunteer.dryland ? volunteer.dryland : '',
            on_hill1: volunteer.on_hill1 ? volunteer.on_hill1 : '',
            on_hill2: volunteer.on_hill2 ? volunteer.on_hill2 : '',
            on_hill3: volunteer.on_hill3 ? volunteer.on_hill3 : '',
            on_hill4: volunteer.on_hill4 ? volunteer.on_hill4 : '',
            shirt_size: volunteer.shirt_size ? volunteer.shirt_size : '',
            is_new: volunteer.is_new ? volunteer.is_new : ''

        },
        onSubmit: (values) => {
            alert(JSON.stringify(values));
        },
    })

    const saveVol = async e => {
        e.preventDefault();
        //await saveVol(volunteer, dispatch)
    }

    let alert;
    if (state.error) {
        alert = <Alert severity="error">{state.error}</Alert>
    } else if (state.info) {
        <Alert severity="info">{state.info}</Alert>
    } else {
        alert = <span></span>
    }


    let sx = isMobile ? {marginBottom: 1.1} : {margin: 1};
    return (
        <Card variant="outlined">
            <CardHeader
                avatar={<Avatar><VolunteerActivismIcon/></Avatar>}
                title={<Typography variant='caption' sx={{fontSize: 24}}
                                   color="text.secondary">{formik.values.lastname + ", " + formik.values.firstname}</Typography>}/>
            <CardContent>
                <form onSubmit={formik.handleSubmit}>
                    <TextField value={formik.values.firstname}
                               sx={sx}
                               fullWidth={isMobile}
                               onChange={formik.handleChange}
                               error={formik.touched.firstname && Boolean(formik.errors.firstname)}
                               helperText={formik.touched.firstname && formik.errors.firstname}
                               required name="firstname" label="First"
                               variant="outlined"/>
                    <TextField value={formik.values.lastname}
                               sx={sx}
                               fullWidth={isMobile}
                               onChange={formik.handleChange}
                               error={formik.touched.lastname && Boolean(formik.errors.lastname)}
                               helperText={formik.touched.lastname && formik.errors.lastname}
                               required name="lastname" label="Last"
                               variant="outlined"/>
                    <TextField value={formik.values.birthdate} sx={sx}
                               fullWidth={isMobile}
                               type="date"
                               onChange={formik.handleChange}
                               error={formik.touched.birthdate && Boolean(formik.errors.birthdate)}
                               helperText={formik.touched.birthdate && formik.errors.birthdate}
                               required name="birthdate" label="Birthdate"
                               variant="outlined"/>
                    <TextField value={formik.values.email} sx={sx}
                               fullWidth={isMobile}
                               onChange={formik.handleChange}
                               error={formik.touched.email && Boolean(formik.errors.email)}
                               helperText={formik.touched.email && formik.errors.email}
                               required name="email" label="Email"
                               variant="outlined"/>
                    <TextField value={formik.values.phone_primary} sx={sx}
                               fullWidth={isMobile}
                               onChange={formik.handleChange}
                               error={formik.touched.phone_primary && Boolean(formik.errors.phone_primary)}
                               helperText={formik.touched.phone_primary && formik.errors.phone_primary}
                               required name="phone_primary" label="Phone Number"
                               variant="outlined"/>
                    <TextField value={formik.values.phone_secondary} sx={sx} fullWidth={isMobile}
                               onChange={formik.handleChange}
                               error={formik.touched.phone_secondary && Boolean(formik.errors.phone_secondary)}
                               helperText={formik.touched.phone_secondary && formik.errors.phone_secondary}
                               name="phone_secondary" label="Secondary Phone"
                               variant="outlined"/>
                    <TextField value={formik.values.occupation} sx={sx}
                               fullWidth={isMobile}
                               onChange={formik.handleChange}
                               error={formik.touched.occupation && Boolean(formik.errors.occupation)}
                               helperText={formik.touched.occupation && formik.errors.occupation}
                               name="occupation" label="Occupation"
                               variant="outlined"/>
                    <TextField value={formik.values.address} sx={sx}
                               fullWidth={isMobile}
                               onChange={formik.handleChange}
                               error={formik.touched.address && Boolean(formik.errors.address)}
                               helperText={formik.touched.address && formik.errors.address}
                               name="address" label="Address"
                               variant="outlined"/>
                    <TextField value={formik.values.city} sx={sx}
                               onChange={formik.handleChange}
                               error={formik.touched.city && Boolean(formik.errors.city)}
                               helperText={formik.touched.city && formik.errors.city}
                               name="city" label="City"
                               variant="outlined"/>
                    <TextField value={formik.values.state} sx={sx}
                               onChange={formik.handleChange}
                               error={formik.touched.state && Boolean(formik.errors.state)}
                               helperText={formik.touched.state && formik.errors.state}
                               name="state" label="State"
                               variant="outlined"/>
                    <TextField value={formik.values.zip} sx={sx}
                               onChange={formik.handleChange}
                               error={formik.touched.zip && Boolean(formik.errors.zip)}
                               helperText={formik.touched.zip && formik.errors.zip}
                               name="zip" label="Zip Code"
                               variant="outlined"/>
                    <TextField value={formik.values.how_heard_of} sx={sx} fullWidth={isMobile}
                               onChange={formik.handleChange}
                               error={formik.touched.how_heard_of && Boolean(formik.errors.how_heard_of)}
                               helperText={formik.touched.how_heard_of && formik.errors.how_heard_of}
                               name="how_heard_of" label="How did you hear about us?"
                               variant="outlined"/>
                    <TextField value={formik.values.previous_years} sx={sx} fullWidth={isMobile}
                               type={"number"}
                               onChange={formik.handleChange}
                               error={formik.touched.previous_years && Boolean(formik.errors.previous_years)}
                               helperText={formik.touched.previous_years && formik.errors.previous_years}
                               name="previous_years" label="How many years with Us?"
                               variant="outlined"/>

                    <TextField value={formik.values.emer_contact} sx={sx} fullWidth={isMobile}
                               onChange={formik.handleChange}
                               error={formik.touched.emer_contact && Boolean(formik.errors.emer_contact)}
                               helperText={formik.touched.emer_contact && formik.errors.emer_contact}
                               name="emer_contact" label="Emergency Contact"
                               variant="outlined"/>
                    <TextField value={formik.values.emer_contact_primary_phone} sx={sx} fullWidth={isMobile}
                               onChange={formik.handleChange}
                               error={formik.touched.emer_contact_primary_phone && Boolean(formik.errors.emer_contact_primary_phone)}
                               helperText={formik.touched.emer_contact_primary_phone && formik.errors.emer_contact_primary_phone}
                               name="emer_contact_primary_phone" label="Primary Phone"
                               variant="outlined"/>
                    <TextField value={formik.values.emer_contact_secondary_phone} sx={sx} fullWidth={isMobile}
                               onChange={formik.handleChange}
                               error={formik.touched.emer_contact_secondary_phone && Boolean(formik.errors.emer_contact_secondary_phone)}
                               helperText={formik.touched.emer_contact_secondary_phone && formik.errors.emer_contact_secondary_phone}
                               name="emer_contact_secondary_phone" label="Secondary Phone"
                               variant="outlined"/>

                    <FormControl sx={sx} fullWidth={isMobile}>
                        <InputLabel id="shirt_size_label">Shirt Size</InputLabel>
                        <Select id='shirt_size' labelId='shirt_size_label' label='Shirt Size'
                                value={formik.values.shirt_size}>
                            <MenuItem value=''>Unknown</MenuItem>
                            <MenuItem value='XS'>XSmall</MenuItem>
                            <MenuItem value='S'>Small</MenuItem>
                            <MenuItem value='M'>Medium</MenuItem>
                            <MenuItem value='L'>Large</MenuItem>
                            <MenuItem value='XL'>XLarge</MenuItem>
                            <MenuItem value='XXL'>XXLarge</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl sx={sx} fullWidth={isMobile}>
                        <InputLabel id="skilevel_label">Ski Proficiency</InputLabel>
                        <Select id='skilevel' labelId='skilevel_label' label='Ski Proficiency'
                                value={formik.values.skilevel}>
                            <MenuItem value=''>Unknown</MenuItem>
                            <MenuItem value='Advanced'>Advanced</MenuItem>
                            <MenuItem value='Intermediate'>Intermediate</MenuItem>
                            <MenuItem value='Beginner'>Beginner</MenuItem>
                            <MenuItem value='Non-skier'>Non-Skier</MenuItem>
                        </Select>
                    </FormControl>

                    <Card variant="outlined" sx={sx}>
                        <CardContent>
                            <Typography sx={{fontSize: 14}} color="text.secondary">Committees</Typography>
                            <FormControlLabel
                                control={<Checkbox id="committee_training" value="true" onChange={formik.handleChange}
                                                   checked={formik.values.committee_training}/>}
                                label="Training"/>
                            <FormControlLabel
                                control={<Checkbox id="committee_pr" value="true" onChange={formik.handleChange}
                                                   checked={formik.values.committee_pr}/>}
                                label="Public Relations"/>
                            <FormControlLabel
                                control={<Checkbox id="committee_board" value="true" onChange={formik.handleChange}
                                                   checked={formik.values.committee_board}/>}
                                label="Board Member"/>
                            <FormControlLabel
                                control={<Checkbox id="committee_equipment" value="true" onChange={formik.handleChange}
                                                   checked={formik.values.committee_equipment}/>}
                                label="Equipment"/>
                            <FormControlLabel control={<Checkbox id="committee_fundraising" value="true"
                                                                 onChange={formik.handleChange}
                                                                 checked={formik.values.committee_fundraising}/>}
                                              label="Fundraising"/>
                            <FormControlLabel
                                control={<Checkbox id="committee_web" value="true" onChange={formik.handleChange}
                                                   checked={formik.values.committee_web}/>}
                                label="Website"/>
                            <FormControlLabel
                                control={<Checkbox id="committee_mail" value="true" onChange={formik.handleChange}
                                                   checked={formik.values.committee_mail}/>}
                                label="Mail"/>
                            <FormControlLabel control={<Checkbox id="committee_special_events"
                                                                 checked={formik.values.committee_special_events}
                                                                 onChange={formik.handleChange}
                                                                 value="true"/>}
                                              label="Events"/>
                        </CardContent>
                    </Card>

                    <Card variant="outlined" sx={sx}>
                        <CardContent>
                            <Typography sx={{fontSize: 14}} color="text.secondary">Training Desired:</Typography>
                            <FormControlLabel
                                control={<Checkbox id="training_sit" onChange={formik.handleChange} value="true"
                                                   checked={formik.values.training_sit}/>}
                                label="Sit Down"/>
                            <FormControlLabel
                                control={<Checkbox id="training_stand" value="true" onChange={formik.handleChange}
                                                   checked={formik.values.training_stand}/>}
                                label="Stand Up"/>


                            <FormControlLabel label="Comfortable taking athelete on chairlift?"
                                              control={<Checkbox id="can_chair" value="true"
                                                                 onChange={formik.handleChange}
                                                                 checked={formik.values.can_chair}/>}/>
                            <FormControlLabel
                                control={<Checkbox id="needs_rentals" value="true" onChange={formik.handleChange}
                                                   checked={formik.values.needs_rentals}/>}
                                label="Do you need rental skis?"/>
                            <TextField value={formik.values.student_name} sx={sx} fullWidth={isMobile}
                                       onChange={formik.handleChange}
                                       error={formik.touched.student_name && Boolean(formik.errors.student_name)}
                                       helperText={formik.touched.student_name && formik.errors.student_name}
                                       name="student_name" label="Preferred Student?"
                                       variant="outlined"/>

                            <Card variant="outlined">
                                <CardContent>
                                    <Typography sx={{fontSize: 14}} color="text.secondary">Availability:</Typography>
                                    <FormControlLabel
                                        control={<Checkbox id="tuesday" value="true" onChange={formik.handleChange}
                                                           checked={formik.values.tuesday}/>}
                                        label="Tuesday 6-8p"/>
                                    <FormControlLabel
                                        control={<Checkbox id="wednesday" value="true" onChange={formik.handleChange}
                                                           checked={formik.values.wednesday}/>}
                                        label="Wednesday 6-8p"/>
                                    <FormControlLabel
                                        control={<Checkbox id="thursday" value="true" onChange={formik.handleChange}
                                                           checked={formik.values.thursday}/>}
                                        label="Thursday 6-8p"/>
                                    <FormControlLabel
                                        control={<Checkbox id="sunday1" value="true" onChange={formik.handleChange}
                                                           checked={formik.values.sunday1}/>}
                                        label="Sunday 1-3p"/>
                                    <FormControlLabel
                                        control={<Checkbox id="sunday2" value="true" onChange={formik.handleChange}
                                                           checked={formik.values.sunday2}/>}
                                        label="Sunday 2-4p"/>
                                    <FormControlLabel
                                        control={<Checkbox id="sunday3" value="true" onChange={formik.handleChange}
                                                           checked={formik.values.sunday3}/>}
                                        label="Sunday 3-5p"/>
                                    <FormControlLabel control={<Checkbox id="multiple_lessons" value="true"
                                                                         onChange={formik.handleChange}
                                                                         checked={formik.values.multiple_lessons}/>}
                                                      label="Multiple Lessons?"/>
                                </CardContent>
                            </Card>
                        </CardContent>
                    </Card>

                    <TextField value={formik.values.donation_amount} sx={sx} fullWidth={isMobile}
                               onChange={formik.handleChange}
                               error={formik.touched.donation_amount && Boolean(formik.errors.donation_amount)}
                               helperText={formik.touched.donation_amount && formik.errors.donation_amount}
                               name="donation_amount" label="Donation"
                               variant="outlined"/>
                    <div>
                        <Button variant="contained" type="submit">Save</Button>
                    </div>

                </form>
            </CardContent>
        </Card>
    );

}

Vol.propTypes = {
    volunteer: PropTypes.object.isRequired
}