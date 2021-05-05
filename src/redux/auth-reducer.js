import { stopSubmit } from 'redux-form';
import { authAPI } from '../api/api.js';

const SET_USER_DATA = "SET_USER_DATA";


let initialState = {
    userId: null,
    email: null,
    nick: null,
    access_token: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload
            }
        }
        default:
            return state;
    }
};

export const setAuthUserData = (id, email, nick, access_token, isAuth) => ({ type: SET_USER_DATA, payload: { userId: id, email, nick, access_token, isAuth } });

export const signInUser = (nick, email, password) => (dispatch) => {
    authAPI.mySignIn(nick, email, password).then((data) => {
        if (data.result === "warning") {
            console.log(data);
            dispatch(stopSubmit("signIn", { _error: `${data.message}` }));
        } else
            if (data.result && data.result === "Authorized") {
                let { id, email, nick, access_token } = data.user.authData
                dispatch(setAuthUserData(id, email, nick, access_token, true))
            }
    })
};

export const login = (email, password) => (dispatch) => {
    authAPI.myLogin(email, password).then((data) => {
        if (data.result && data.result === "Authorized") {
            let { id, email, nick, access_token } = data.user.authData
            dispatch(setAuthUserData(id, email, nick, access_token, true))
        }
    }).catch((e) => {
        console.error(e.message)
        console.log(e);
        dispatch(stopSubmit("login", { _error: "Email or password is wrong !" }));
    })
};

export const LOGout = () => (dispatch) => {
    dispatch(setAuthUserData(null, null, null, false))

};

export default authReducer;