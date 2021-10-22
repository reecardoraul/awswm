import React from 'react';
import PropTypes from 'prop-types';
import Select from '@mui/material/Select';
import './Shared.css';
import axios from "axios";
import {Avatar, MenuItem, Typography, TextField, Checkbox, Button, Alert} from "@mui/material";
import DownhillSkiingIcon from '@mui/icons-material/DownhillSkiing';

import {Formik, Form, Field, ErrorMessage, useFormik} from 'formik';
import * as Yup from "yup";

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

    return (
        <div>
            <Typography variant='caption' sx={{fontSize: 24}} color="text.secondary" gutterBottom>Athlete</Typography>
            <div className='right'>
                <Avatar><DownhillSkiingIcon/></Avatar>
            </div>

            <form onSubmit={formik.handleSubmit}>
                <div className='form-div'>
                    <div className='form-element'><TextField value={formik.values.firstname}
                                                             onChange={formik.handleChange}
                                                             error={formik.touched.firstname && Boolean(formik.errors.firstname)}
                                                             helperText={formik.touched.firstname && formik.errors.firstname}
                                                             fullWidth required name="firstname" label="First Name"
                                                             variant="outlined"/></div>
                    <div className='form-element'><TextField value={formik.values.lastname}
                                                             onChange={formik.handleChange}
                                                             error={formik.touched.lastname && Boolean(formik.errors.lastname)}
                                                             helperText={formik.touched.lastname && formik.errors.lastname}
                                                             fullWidth required name="lastname" label="Last Name"
                                                             variant="outlined"/></div>
                    <div className='form-element'><TextField value={formik.values.phone_primary}
                                                             onChange={formik.handleChange}
                                                             error={formik.touched.phone_primary && Boolean(formik.errors.phone_primary)}
                                                             helperText={formik.touched.phone_primary && formik.errors.phone_primary}
                                                             fullWidth required name="phone_primary" label="Cell Phone"
                                                             variant="outlined"/>
                    </div>
                    <div className='form-element'><TextField value={formik.values.phone_secondary}
                                                             onChange={formik.handleChange}
                                                             error={formik.touched.phone_secondary && Boolean(formik.errors.phone_secondary)}
                                                             helperText={formik.touched.phone_secondary && formik.errors.phone_secondary}
                                                             fullWidth name="secondary_primary" label="Other Phone"
                                                             variant="outlined"/>
                    </div>
                    <div className='form-element'><TextField value={formik.values.email} onChange={formik.handleChange}
                                                             error={formik.touched.email && Boolean(formik.errors.email)}
                                                             helperText={formik.touched.email && formik.errors.email}
                                                             type="email" fullWidth required name="email" label="Email"
                                                             variant="outlined"/></div>

                    <div>
                        <div className='form-element'><TextField value={formik.values.address}
                                                                 onChange={formik.handleChange}
                                                                 error={formik.touched.address && Boolean(formik.errors.address)}
                                                                 helperText={formik.touched.address && formik.errors.address}
                                                                 fullWidth name="address" label="Address"
                                                                 variant="outlined"/></div>
                        <div className='form-element'><TextField value={formik.values.city}
                                                                 onChange={formik.handleChange}
                                                                 error={formik.touched.city && Boolean(formik.errors.city)}
                                                                 helperText={formik.touched.city && formik.errors.city}
                                                                 fullWidth name="city" label="City"
                                                                 variant="outlined"/></div>
                        <div className='form-element'><TextField value={formik.values.state}
                                                                 onChange={formik.handleChange}
                                                                 error={formik.touched.state && Boolean(formik.errors.state)}
                                                                 helperText={formik.touched.state && formik.errors.state}
                                                                 fullWidth name="state" label="State"
                                                                 variant="outlined"/></div>
                        <div className='form-element'><TextField value={formik.values.zip}
                                                                 onChange={formik.handleChange}
                                                                 error={formik.touched.zip && Boolean(formik.errors.zip)}
                                                                 helperText={formik.touched.zip && formik.errors.zip}
                                                                 fullWidth name="zip" label="Zip"
                                                                 variant="outlined"/></div>

                        <div className='form-element'><TextField value={formik.values.zip}
                                                                 onChange={formik.handleChange}
                                                                 error={formik.touched.zip && Boolean(formik.errors.zip)}
                                                                 helperText={formik.touched.zip && formik.errors.zip}
                                                                 fullWidth name="zip" label="Zip"
                                                                 variant="outlined"/></div>

                        <div className='form-element'><TextField value={formik.values.height}
                                                                 onChange={formik.handleChange}
                                                                 error={formik.touched.height && Boolean(formik.errors.height)}
                                                                 helperText={formik.touched.height && formik.errors.height}
                                                                 fullWidth name="height" label="height"
                                                                 variant="outlined"/></div>

                        <div className='form-element'><TextField value={formik.values.weight}
                                                                 onChange={formik.handleChange}
                                                                 error={formik.touched.weight && Boolean(formik.errors.weight)}
                                                                 helperText={formik.touched.weight && formik.errors.weight}
                                                                 fullWidth name="weight" label="weight"
                                                                 variant="outlined"/></div>

                        <div className='form-element'><TextField value={formik.values.shoe_size}
                                                                 onChange={formik.handleChange}
                                                                 error={formik.touched.shoe_size && Boolean(formik.errors.shoe_size)}
                                                                 helperText={formik.touched.shoe_size && formik.errors.shoe_size}
                                                                 fullWidth name="shoe_size" label="shoe_size"
                                                                 variant="outlined"/></div>

                        <div className='form-element'><TextField value={formik.values.how_heard_of}
                                                                 onChange={formik.handleChange}
                                                                 error={formik.touched.how_heard_of && Boolean(formik.errors.how_heard_of)}
                                                                 helperText={formik.touched.how_heard_of && formik.errors.how_heard_of}
                                                                 fullWidth name="how_heard_of" label="how_heard_of"
                                                                 variant="outlined"/></div>

                        <div className='form-element'><TextField value={formik.values.volunteer_name}
                                                                 onChange={formik.handleChange}
                                                                 error={formik.touched.volunteer_name && Boolean(formik.errors.volunteer_name)}
                                                                 helperText={formik.touched.volunteer_name && formik.errors.volunteer_name}
                                                                 fullWidth name="volunteer_name" label="volunteer_name"
                                                                 variant="outlined"/></div>

                    </div>


                    <div className="section">
                        <b>Availability</b><br/>
                    </div>
                    <div>
                        <Button variant="contained" color="primary"
                            //disabled={isSubmitting}
                                type="submit">Save</Button>
                    </div>
                </div>
            </form>
        </div>
    );

}

Athlete.propTypes = {
    athlete: PropTypes.object.isRequired
}