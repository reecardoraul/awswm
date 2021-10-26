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
    Button,
    CardHeader,
    CardContent,
    Card, FormControl
} from "@mui/material";
import DownhillSkiingIcon from '@mui/icons-material/DownhillSkiing';

import {useFormik} from 'formik';

import {isMobile} from "react-device-detect";
import InputLabel from "@mui/material/InputLabel";
import FormControlLabel from "@mui/material/FormControlLabel";

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
            disability_descrip: athlete.disability_descrip ? athlete.disability_descrip : ''
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    })

    let sx = isMobile ? {marginBottom: 1.1} : {margin: 1};
    let title = athlete.firstname && athlete.lastname ? athlete.lastname + ", " + athlete.firstname : "New Athlete";
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
                                label="AMP"/>
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
                                label="SCI"/>
                            <FormControlLabel
                                control={<Checkbox id="dis_cp" onChange={formik.handleChange} value="true"
                                                   checked={formik.values.dis_cp}/>}
                                label="Cereberal Palsy"/>
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
                                       name="dis_other" label="Disability Description"
                                       variant="outlined"/>

                        </CardContent>
                    </Card>

                    <Card variant="outlined">
                        <CardContent>
                            <Typography sx={{fontSize: 14}} color="text.secondary">Seizures</Typography>
                            <FormControlLabel
                                control={<Checkbox id="ad_2t" value="true" onChange={formik.handleChange}
                                                   checked={formik.values.ad_2t}/>}
                                label="2 Track"/>
                            <FormControlLabel
                                control={<Checkbox id="ad_3t" value="true" onChange={formik.handleChange}
                                                   checked={formik.values.ad_2t}/>}
                                label="3 Track"/>
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

Athlete.propTypes = {
    athlete: PropTypes.object.isRequired
}