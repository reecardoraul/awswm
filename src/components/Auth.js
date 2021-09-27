import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './Auth.css'
import Button from '@mui/material/Button';
import axios from "axios";


async function sendPhoneNumber(phone_number, callback, onerr) {
    axios.post('/auth/admin_sms', {"phone_cell": phone_number})
        .then(data => callback(data))
        .catch(error => onerr(error.response.data));
}

async function sendVerification(ott, callback, onerr) {
    axios.post('auth/admin_ott', ott)
        .catch(error => onerr(error.response.data))
        .then(data => callback(data));
}

async function whoAmI(callback, onerr) {
    axios.get('auth/whoami')
        .catch(error => onerr(error.response.data))
        .then(data => callback(data));
}


export default function Auth({setUser}) {
    const [phone_good, setPhoneGood] = useState();
    const [code, setCode] = useState();
    const [phone_cell, setPhone] = useState();
    const [phone_err, setPhoneErr] = useState();
    const [ott_err, setOttErr] = useState();

    const submitPhoneNumber = async e => {
        e.preventDefault();
        await sendPhoneNumber(phone_cell, setPhoneGood, setPhoneErr)
    }

    const submitVerificationCode = async e => {
        e.preventDefault();
        await sendVerification(
            {"code": code, "phone_cell": phone_cell},
            getCurrentUser,
            setOttErr
        );

    }

    const getCurrentUser = async e => {
        await whoAmI(setUser, setOttErr());
    }

    var err = "";
    if (ott_err) {
        err = ott_err;
    }
    if (phone_good) {
        return (
            <div className="login-wrapper">
                <h1>Authenticate</h1>
                <form onSubmit={submitVerificationCode}>
                    <label>
                        <p>{err}</p>
                    </label>
                    <label>
                        <p>Verification Code</p>
                        <input type="text" onChange={e => setCode(e.target.value)}/>
                    </label>
                    <br/>
                    <div>
                        <Button variant="contained" type="submit">Authenticate</Button>
                    </div>
                </form>
            </div>
        )
    }

    var label = "Phone Number"
    if (phone_err) {
        label = phone_err;
    }

    return (
        <div className="login-wrapper">
            <h1>Authenticate</h1>
            <form onSubmit={submitPhoneNumber}>
                <label>
                    <p>{label}</p>
                    <input type="text" onChange={e => setPhone(e.target.value)}/>
                </label>
                <br/>
                <div>
                    <Button variant="contained" type="submit">Authenticate</Button>
                </div>
            </form>
        </div>
    )
}

Auth.propTypes = {
    setUser: PropTypes.func.isRequired
}