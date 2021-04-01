import { authAPI } from '../api/api.js';

const SET_USER_DATA = "SET_USER_DATA";



let initialState = {
    userId: null,
    email: null,
    nick: null,
    isAuth: false
    // isFetching: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        default:
            return state;
    }
};

export const setAuthUserData = (userId, email, nick) => ({ type: SET_USER_DATA, data: { userId, email, nick } });



export const login = () => (dispatch) => {
    authAPI.me().then((data) => {
        if (data.result === "Authorized") {
            console.log(data);
            let { userId, email, nick } = data.user.authData
            dispatch(setAuthUserData(data.user.authData.nick))
            dispatch(setAuthUserData(userId, email, nick))
        }
    })
};

export default authReducer;