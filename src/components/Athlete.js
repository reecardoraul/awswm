import React from 'react';
import PropTypes from 'prop-types';
import Select from '@mui/material/Select';
import './Shared.css';
import axios from "axios";
import {
    Avatar,
    MenuItem,
    Typography,
    TextField,
    Checkbox,
    Collapse,
    Button,
    CardHeader,
    CardContent,
    Card, FormControl,
    Radio,
    RadioGroup,
    Switch
} from "@mui/material";
import DownhillSkiingIcon from '@mui/icons-material/DownhillSkiing';

import {useFormik} from 'formik';

import {isMobile} from "react-device-detect";
import InputLabel from "@mui/material/InputLabel";
import FormControlLabel from "@mui/material/FormControlLabel";

function getChoiceDay(athlete, choice) {
    if (!athlete)
        return '';
    if (athlete.tuesday == choice)
        return "tuesday";
    if (athlete.wednesday == choice)
        return "wednesday";
    if (athlete.thursday == choice)
        return "thursday";
    if (athlete.sunday1 == choice)
        return "sunday1";
    if (athlete.sunday2 == choice)
        return "sunday2";
    if (athlete.sunday3 == choice)
        return "sunday3";
    return '';
}

export default function Athlete({athlete}) {
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            id: athlete.id ? athlete.id : '',
            birthdate: athlete.birthdate ? athlete.birthdate : '',
            lastname: athlete.lastname ? athlete.lastname : '',
            firstname: athlete.firstname ? athlete.firstname : '',
            guardian: athlete.guardian ? athlete.guardian : '',
            address: athlete.address ? athlete.address : '',
            city: athlete.city ? athlete.city : '',
            state: athlete.state ? athlete.state : '',
            zip: athlete.zip ? athlete.zip : '',
            phone_primary: athlete.phone_primary ? athlete.phone_primary : '',
            phone_secondary: athlete.phone_secondary ? athlete.phone_secondary : '',
            email: athlete.email ? athlete.email : '',
            height: athlete.height ? athlete.height : '',
            weight: athlete.weight ? athlete.weight : '',
            shoe_size: athlete.shoe_size ? athlete.shoe_size : '',
            how_heard_of: athlete.how_heard_of ? athlete.how_heard_of : '',
            volunteer_name: athlete.volunteer_name ? athlete.volunteer_name : '',
            tuesday: athlete.tuesday ? athlete.tuesday : '',
            wednesday: athlete.wednesday ? athlete.wednesday : '',
            thursday: athlete.thursday ? athlete.thursday : '',
            sunday1: athlete.sunday1 ? athlete.sunday1 : '',
            sunday2: athlete.sunday2 ? athlete.sunday2 : '',
            sunday3: athlete.sunday3 ? athlete.sunday3 : '',
            emer_contact: athlete.emer_contact ? athlete.emer_contact : '',
            emer_contact_primary_phone: athlete.emer_contact_primary_phone ? athlete.emer_contact_primary_phone : '',
            emer_contact_secondary_phone: athlete.emer_contact_secondary_phone ? athlete.emer_contact_secondary_phone : '',
            dis_dd: athlete.dis_dd ? athlete.dis_dd : '',
            dis_vi: athlete.dis_vi ? athlete.dis_vi : '',
            dis_hi: athlete.dis_hi ? athlete.dis_hi : '',
            dis_oi: athlete.dis_oi ? athlete.dis_oi : '',
            dis_sci: athlete.dis_sci ? athlete.dis_sci : '',
            dis_cp: athlete.dis_cp ? athlete.dis_cp : '',
            dis_tbi: athlete.dis_tbi ? athlete.dis_tbi : '',
            dis_amp: athlete.dis_amp ? athlete.dis_amp : '',
            dis_stroke: athlete.dis_stroke ? athlete.dis_stroke : '',
            dis_other: athlete.dis_other ? athlete.dis_other : '',
            ad_bvi: athlete.ad_bvi ? athlete.ad_bvi : '',
            ad_hi: athlete.ad_hi ? athlete.ad_hi : '',
            ad_2t: athlete.ad_2t ? athlete.ad_2t : '',
            ad_3t: athlete.ad_3t ? athlete.ad_3t : '',
            ad_4t: athlete.ad_4t ? athlete.ad_4t : '',
            ad_aa: athlete.ad_aa ? athlete.ad_aa : '',
            ad_dd: athlete.ad_dd ? athlete.ad_dd : '',
            ad_mono: athlete.ad_mono ? athlete.ad_mono : '',
            ad_bi: athlete.ad_bi ? athlete.ad_bi : '',
            disability_descrip: athlete.disability_descrip ? athlete.disability_descrip : '',
            doctors_descrip: athlete.doctors_descrip ? athlete.doctors_descrip : '',
            limitation: athlete.limitation ? athlete.limitation : '',
            precaution: athlete.precaution ? athlete.precaution : '',
            allergies: athlete.allergies ? athlete.allergies : '',
            hebb: athlete.hebb ? athlete.hebb : '',
            downs: athlete.downs ? athlete.downs : '',
            assist_eat: athlete.assist_eat ? athlete.assist_eat : '',
            assist_bathroom: athlete.assist_bathroom ? athlete.assist_bathroom : '',
            sit_roll: athlete.sit_roll ? athlete.sit_roll : '',
            sit_arms: athlete.sit_arms ? athlete.sit_arms : '',
            sit_injury: athlete.sit_injury ? athlete.sit_injury : '',
            sit_brace: athlete.sit_brace ? athlete.sit_brace : '',
            sit_rods: athlete.sit_rods ? athlete.sit_rods : '',
            sit_rods_length: athlete.sit_rods_length ? athlete.sit_rods_length : '',
            first_choice: getChoiceDay(athlete, "1"),
            second_choice: getChoiceDay(athlete, "2"),
            third_choice: getChoiceDay(athlete, "3"),
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    })

    const styles = {
        display: "inline-block"
    };

    let sx = isMobile ? {marginBottom: 1.1} : {margin: 1};
    let title = athlete.id ? athlete.lastname + ", " + athlete.firstname : "New Athlete";
    return (
        <Card variant="outlined">
            <CardHeader
                avatar={<Avatar><DownhillSkiingIcon/></Avatar>}
                title={<Typography variant='caption' sx={{fontSize: 24}}
                                   color="text.secondary">{title}</Typography>}/>
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
                               InputLabelProps={{shrink: true}}
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
                    <TextField value={formik.values.guardian} sx={sx} fullWidth={isMobile}
                               onChange={formik.handleChange}
                               error={formik.touched.guardian && Boolean(formik.errors.guardian)}
                               helperText={formik.touched.guardian && formik.errors.guardian}
                               name="guardian" label="Parent/Guardian"
                               variant="outlined"/>
                    <TextField value={formik.values.height} sx={sx}
                               fullWidth={isMobile}
                               onChange={formik.handleChange}
                               error={formik.touched.height && Boolean(formik.errors.height)}
                               helperText={formik.touched.height && formik.errors.height}
                               name="occupation" label="Height"
                               variant="outlined"/>
                    <TextField value={formik.values.weight} sx={sx}
                               fullWidth={isMobile}
                               onChange={formik.handleChange}
                               error={formik.touched.weight && Boolean(formik.errors.weight)}
                               helperText={formik.touched.weight && formik.errors.weight}
                               inputMode="decimal"
                               name="occupation" label="Weight"
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
                               name="emer_contact_primary_phone" label="Emergency Phone"
                               variant="outlined"/>
                    <TextField value={formik.values.emer_contact_secondary_phone} sx={sx} fullWidth={isMobile}
                               onChange={formik.handleChange}
                               error={formik.touched.emer_contact_secondary_phone && Boolean(formik.errors.emer_contact_secondary_phone)}
                               helperText={formik.touched.emer_contact_secondary_phone && formik.errors.emer_contact_secondary_phone}
                               name="emer_contact_secondary_phone" label="Emergency Secondary Phone"
                               variant="outlined"/>

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
                            <Typography sx={{fontSize: 14}} color="text.secondary">Disability</Typography>
                            <FormControlLabel
                                control={<Checkbox id="dis_amp" onChange={formik.handleChange} value="true"
                                                   checked={formik.values.dis_amp}/>}
                                label="Amputee"/>
                            <FormControlLabel
                                control={<Checkbox id="dis_cp" onChange={formik.handleChange} value="true"
                                                   checked={formik.values.dis_cp}/>}
                                label="Cereberal Palsy"/>
                            <FormControlLabel
                                control={<Checkbox id="dis_dd" onChange={formik.handleChange} value="true"
                                                   checked={formik.values.dis_dd}/>}
                                label="Developmental"/>
                            <FormControlLabel
                                control={<Checkbox id="dis_vi" onChange={formik.handleChange} value="true"
                                                   checked={formik.values.dis_vi}/>}
                                label="Visual Impairment"/>
                            <FormControlLabel
                                control={<Checkbox id="dis_hi" onChange={formik.handleChange} value="true"
                                                   checked={formik.values.dis_hi}/>}
                                label="Hearing Impairment"/>
                            <FormControlLabel
                                control={<Checkbox id="dis_oi" onChange={formik.handleChange} value="true"
                                                   checked={formik.values.dis_oi}/>}
                                label="Orthopedic Impairment"/>
                            <FormControlLabel
                                control={<Checkbox id="dis_sci" onChange={formik.handleChange} value="true"
                                                   checked={formik.values.dis_sci}/>}
                                label="Spinal Cord Injury"/>
                            <FormControlLabel
                                control={<Checkbox id="dis_stroke" onChange={formik.handleChange} value="true"
                                                   checked={formik.values.dis_stroke}/>}
                                label="Stroke"/>
                            <FormControlLabel
                                control={<Checkbox id="dis_tbi" onChange={formik.handleChange} value="true"
                                                   checked={formik.values.dis_tbi}/>}
                                label="Traumatic Brain Injury"/>


                            <TextField value={formik.values.dis_other} sx={sx} fullWidth={isMobile}
                                       onChange={formik.handleChange}
                                       error={formik.touched.dis_other && Boolean(formik.errors.dis_other)}
                                       helperText={formik.touched.dis_other && formik.errors.dis_other}
                                       name="dis_other" label="Other Disability"
                                       variant="outlined"/>
                            <TextField value={formik.values.disability_descrip} sx={sx} fullWidth={isMobile}
                                       onChange={formik.handleChange}
                                       error={formik.touched.disability_descrip && Boolean(formik.errors.disability_descrip)}
                                       helperText={formik.touched.disability_descrip && formik.errors.disability_descrip}
                                       name="disability_descrip" label="Disability Description"
                                       variant="outlined"/>
                            <TextField value={formik.values.doctor_descrip} sx={sx} fullWidth={isMobile}
                                       onChange={formik.handleChange}
                                       error={formik.touched.doctor_descrip && Boolean(formik.errors.doctor_descrip)}
                                       helperText={formik.touched.doctor_descrip && formik.errors.doctor_descrip}
                                       name="doctor_descrip" label="Is skier under doctors care for any condition?"
                                       variant="outlined"/>
                            <TextField value={formik.values.limitation} sx={sx} fullWidth={isMobile}
                                       onChange={formik.handleChange}
                                       error={formik.touched.limitation && Boolean(formik.errors.limitation)}
                                       helperText={formik.touched.limitation && formik.errors.limitation}
                                       name="limitation" label="Medical Precautions?"
                                       variant="outlined"/>
                            <TextField value={formik.values.allergies} sx={sx} fullWidth={isMobile}
                                       onChange={formik.handleChange}
                                       error={formik.touched.allergies && Boolean(formik.errors.allergies)}
                                       helperText={formik.touched.allergies && formik.errors.allergies}
                                       name="allergies" label="Allergies"
                                       variant="outlined"/>

                        </CardContent>
                    </Card>

                    <Card variant="outlined" sx={sx}>
                        <CardContent>
                            <Typography sx={{fontSize: 14}} color="text.secondary">Seizures</Typography>
                            <FormControlLabel
                                control={<Checkbox id="seizure" value="true" onChange={formik.handleChange}
                                                   checked={formik.values.seizure}/>}
                                label="Experiences Seizures"/>
                            <Collapse in={formik.values.seizure}>
                                <TextField value={formik.values.seizure_med} sx={sx} fullWidth={isMobile}
                                           onChange={formik.handleChange}
                                           error={formik.touched.seizure_med && Boolean(formik.errors.seizure_med)}
                                           helperText={formik.touched.seizure_med && formik.errors.seizure_med}
                                           name="seizure_med" label="Seizure Medication"
                                           variant="outlined"/>
                                <TextField value={formik.values.seizure_type} sx={sx} fullWidth={isMobile}
                                           onChange={formik.handleChange}
                                           error={formik.touched.seizure_type && Boolean(formik.errors.seizure_type)}
                                           helperText={formik.touched.seizure_type && formik.errors.seizure_type}
                                           name="seizure_type" label="Seizure Type"
                                           variant="outlined"/>
                                <TextField value={formik.values.seizure_last} sx={sx} fullWidth={isMobile}
                                           onChange={formik.handleChange}
                                           error={formik.touched.seizure_last && Boolean(formik.errors.seizure_last)}
                                           helperText={formik.touched.seizure_last && formik.errors.seizure_last}
                                           name="seizure_last" label="When was last seizure?"
                                           variant="outlined"/>
                            </Collapse>
                        </CardContent>
                    </Card>

                    <Card variant="outlined" sx={sx}>
                        <CardContent>
                            <Typography sx={{fontSize: 14}} color="text.secondary">Sit-Down Skiers</Typography>
                            <div>
                                <FormControlLabel
                                    control={<Switch id="sit_roll" onChange={formik.handleChange} value="true"
                                                     checked={formik.values.sit_roll}/>}
                                    label="Will rolling onto shoulders cause dizziness or pain?"/></div>
                            <div>
                                <FormControlLabel
                                    control={<Switch id="sit_arms" onChange={formik.handleChange} value="true"
                                                     checked={formik.values.sit_arms}/>}
                                    label="Can push wheelchair independently?"/></div>
                            <div>
                                <FormControlLabel
                                    control={<Switch id="sit_injury" onChange={formik.handleChange} value="true"
                                                     checked={formik.values.sit_injury}/>}
                                    label="Injury or Surgery to back, spine, or hips in last six months?"/>
                            </div>
                            <div>
                                <FormControlLabel
                                    control={<Switch id="sit_brace" onChange={formik.handleChange} value="true"
                                                     checked={formik.values.sit_brace}/>}
                                    label="Does the skier wear a back brace?"/>
                            </div>
                            <div>
                                <FormControlLabel
                                    control={<Switch id="sit_rods" onChange={formik.handleChange} value="true"
                                                     checked={formik.values.sit_rods}/>}
                                    label="Does the skier have Harrington Rods?"/>
                                <Collapse in={formik.values.sit_rods}>
                                    <TextField value={formik.values.sit_rods_length} sx={sx} fullWidth={isMobile}
                                               onChange={formik.handleChange}
                                               error={formik.touched.sit_rods_length && Boolean(formik.errors.sit_rods_length)}
                                               helperText={formik.touched.sit_rods_length && formik.errors.sit_rods_length}
                                               name="seizure_med" label="How long has the skier had rods?"
                                               variant="outlined"/>
                                </Collapse>
                            </div>
                        </CardContent>
                    </Card>


                    <Card variant="outlined" sx={sx}>
                        <CardContent>
                            <Typography sx={{fontSize: 14}} color="text.secondary">Preferences</Typography>
                            <TextField value={formik.values.volunteer_name} sx={sx} fullWidth={isMobile}
                                       onChange={formik.handleChange}
                                       error={formik.touched.volunteer_name && Boolean(formik.errors.volunteer_name)}
                                       helperText={formik.touched.volunteer_name && formik.errors.volunteer_name}
                                       name="volunteer_name" label="Preferred Volunteer"
                                       variant="outlined"/>

                            <div>
                                <Card variant="outlined" style={styles} sx={sx}><CardContent>
                                    <Typography sx={{fontSize: 14}} color="text.secondary">First Choice</Typography>
                                    <RadioGroup aria-label="first_choice" name="first_choice"
                                                value={formik.values.first_choice} onChange={formik.handleChange}>
                                        <FormControlLabel value="tuesday" control={<Radio/>} label="Tuesday 6-8p"/>
                                        <FormControlLabel value="wednesday" control={<Radio/>} label="Wednesday 6-8p"/>
                                        <FormControlLabel value="thursday" control={<Radio/>} label="Thursday 6-8p"/>
                                        <FormControlLabel value="sunday1" control={<Radio/>} label="Sunday 1-3p"/>
                                        <FormControlLabel value="sunday2" control={<Radio/>} label="Sunday 2-4p"/>
                                        <FormControlLabel value="sunday3" control={<Radio/>} label="Sunday 3-5p"/>
                                    </RadioGroup>
                                </CardContent></Card>

                                <Card variant="outlined" style={styles} sx={sx}><CardContent>
                                    <Typography sx={{fontSize: 14}} color="text.secondary">Second Choice</Typography>
                                    <RadioGroup aria-label="second_choice" name="second_choice"
                                                value={formik.values.second_choice} onChange={formik.handleChange}>
                                        <FormControlLabel value="tuesday" control={<Radio/>} label="Tuesday 6-8p"/>
                                        <FormControlLabel value="wednesday" control={<Radio/>} label="Wednesday 6-8p"/>
                                        <FormControlLabel value="thursday" control={<Radio/>} label="Thursday 6-8p"/>
                                        <FormControlLabel value="sunday1" control={<Radio/>} label="Sunday 1-3p"/>
                                        <FormControlLabel value="sunday2" control={<Radio/>} label="Sunday 2-4p"/>
                                        <FormControlLabel value="sunday3" control={<Radio/>} label="Sunday 3-5p"/>
                                    </RadioGroup>
                                </CardContent></Card>

                                <Card variant="outlined" style={styles} sx={sx}><CardContent>
                                    <Typography sx={{fontSize: 14}} color="text.secondary">Third Choice</Typography>
                                    <RadioGroup aria-label="second_choice" name="third_choice"
                                                value={formik.values.third_choice} onChange={formik.handleChange}>
                                        <FormControlLabel value="tuesday" control={<Radio/>} label="Tuesday 6-8p"/>
                                        <FormControlLabel value="wednesday" control={<Radio/>} label="Wednesday 6-8p"/>
                                        <FormControlLabel value="thursday" control={<Radio/>} label="Thursday 6-8p"/>
                                        <FormControlLabel value="sunday1" control={<Radio/>} label="Sunday 1-3p"/>
                                        <FormControlLabel value="sunday2" control={<Radio/>} label="Sunday 2-4p"/>
                                        <FormControlLabel value="sunday3" control={<Radio/>} label="Sunday 3-5p"/>
                                    </RadioGroup>
                                </CardContent></Card>
                            </div>

                        </CardContent>
                    </Card>


                    <div>
                        <Button variant="contained" type="submit">Save</Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    );

}

Athlete.propTypes = {
    athlete: PropTypes.object.isRequired
}