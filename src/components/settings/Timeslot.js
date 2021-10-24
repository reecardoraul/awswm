import React from 'react';
import {Typography, TextField, Button} from "@mui/material";

import {useFormik} from 'formik';
import PropTypes from "prop-types";

export default function Timeslot({timeslot, onSave}) {
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            id: timeslot.id ? timeslot.id : '',
            coordinator: timeslot.coordinator ? timeslot.coordinator : '',
            co_phone: timeslot.co_phone ? timeslot.co_phone : '',
            co_email: timeslot.co_email ? timeslot.co_email : '',
            timeslot: timeslot.timeslot ? timeslot.timeslot : '',
            first_night: timeslot.first_night ? timeslot.first_night : '',
        },
        onSubmit: (values) => {
            onSave(values);
        },
    })

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className='form-div'>
                    <div className='form-element'><TextField value={formik.values.coordinator}
                                                             onChange={formik.handleChange}
                                                             error={formik.touched.coordinator && Boolean(formik.errors.coordinator)}
                                                             helperText={formik.touched.coordinator && formik.errors.coordinator}
                                                             fullWidth required name="coordinator" label="Coordinator"
                                                             variant="outlined"/></div>
                    <div className='form-element'><TextField value={formik.values.co_phone}
                                                             type="tel"
                                                             onChange={formik.handleChange}
                                                             error={formik.touched.co_phone && Boolean(formik.errors.co_phone)}
                                                             helperText={formik.touched.co_phone && formik.errors.co_phone}
                                                             fullWidth required name="co_phone" label="Phone Number"
                                                             variant="outlined"/></div>
                    <div className='form-element'><TextField value={formik.values.co_email}
                                                             type="email"
                                                             onChange={formik.handleChange}
                                                             error={formik.touched.co_email && Boolean(formik.errors.co_email)}
                                                             helperText={formik.touched.co_email && formik.errors.co_email}
                                                             fullWidth required name="co_email" label="Email"
                                                             variant="outlined"/></div>
                    <div className='form-element'><TextField value={formik.values.first_night}
                                                             type="date"
                                                             onChange={formik.handleChange}
                                                             error={formik.touched.first_night && Boolean(formik.errors.first_night)}
                                                             helperText={formik.touched.first_night && formik.errors.first_night}
                                                             fullWidth name="first_night" label="First Ski"
                                                             variant="outlined"/></div>
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

Timeslot.propTypes = {
    timeslot: PropTypes.object.isRequired,
    onSave: PropTypes.func.isRequired
}