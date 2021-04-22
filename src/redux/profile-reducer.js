import { profileAPI } from '../api/api.js';

const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";


let initialState = {
    profile: null,
    status: ""
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_PROFILE:
            return {
                ...state, profile: action.profile
            };
        case SET_STATUS:
            return {
                ...state, status: action.status
            };

        default:
            return state;
    }
};

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });

export const getUserProfile = (nick) => (dispatch) => {
    profileAPI.getProfile(nick)
        .then((resData) => {
            dispatch(setUserProfile(resData.user));
        })
};
export const getStatus = (nick) => (dispatch) => {
    profileAPI.getUserStatus(nick)
        .then((resData) => {
            
            dispatch(setStatus(resData.user.status));
        })
};
export const updateStatus = (user) => (dispatch) => {
    profileAPI.updateStatus(user)
        .then((resData) => {
            dispatch(setStatus(resData.data.profile.status));
        })
};

export default profileReducer;