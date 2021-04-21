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

export const setAuthUserData = (userId, email, nick, access_token, isAuth) => ({ type: SET_USER_DATA, payload: { userId, email, nick, access_token, isAuth } });

// export const login = () => (dispatch) => {
//     authAPI.me().then((data) => {
//         if (data.result === "Authorized") {
//             console.log(data);
//             let { userId, email, nick } = data.user.authData
//             dispatch(setAuthUserData(data.user.authData.nick))
//             dispatch(setAuthUserData(userId, email, nick))
//         }
//     })
// };
export const login = (email, password) => (dispatch) => {
    authAPI.myLogin(email, password).then((data) => {
        if (data.result && data.result === "Authorized") {
            console.log(data);
            let { userId, email, nick, access_token } = data.user.authData
            dispatch(setAuthUserData(userId, email, nick, access_token, true))
        }
    }).catch((e) => {
        console.log("Error");
        let action = stopSubmit("login", { email: "Email or password is wrong !" });
        dispatch(action);
    })
};

export const LOGout = () => (dispatch) => {
    dispatch(setAuthUserData(null, null, null, false))

};

export default authReducer;