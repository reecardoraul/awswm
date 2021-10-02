import React, {useState, useReducer} from 'react';
import PropTypes from 'prop-types';
import './Auth.css'
import Phone from './auth/Phone';
import Verify from './auth/Verify';

function reducer(state, action) {
    switch (action.type) {
        case 'phone':
            return {status: 'phone'};
        case 'verify':
            return {status: 'verify'};
        default:
            throw new Error();
    }
}

// async function getUser(userId, dispatch, set_user) {
//     axios.get('volunteers/' + userId)
//         .catch(error => dispatch({type: 'user_error', error: error.message}))
//         .then(data => {
//             if (data != null) {
//                 dispatch({type: 'user_fetched', userid: userId, user: data.data});
//                 set_user(data.data);
//             }else{
//                 dispatch({type: 'user_error', error: "Unable to fetch user data", userid: userId})
//             }
//         });
// }

export default function Auth({setUser}) {
    const [phoneNumber, setPhoneNumber] = useState();
    const initialState = {status: 'phone', err: null, spinner: false, userid: null};
    const [state, dispatch] = useReducer(reducer, initialState);

    const setPhone = async phone => {
        setPhoneNumber(phone);
        dispatch({type:'verify'})
    }

    switch ( state.status ) {
        case 'phone':
            return <Phone setPhone={setPhone}></Phone>

        case 'verify':
            return <Verify phoneNumber={phoneNumber} setUserId={setUser}></Verify>

        default:
            return (<h1>BAD STATE!</h1>);
    }
}

Auth.propTypes = {
    setUser: PropTypes.func.isRequired
}