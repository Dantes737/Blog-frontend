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

export const getUserProfile = (userId) => (dispatch) => {
    profileAPI.getProfile(userId)
        .then((resData) => {
            dispatch(setUserProfile(resData.user));
        })
};
export const getStatus = (userId) => (dispatch) => {
    profileAPI.getUserStatus(userId)
        .then((resData) => {
            dispatch(setStatus(resData.data.user.status));
        })
};
export const updateStatus = (user) => (dispatch) => {
    profileAPI.updateStatus(user)
        .then((resData) => {
            dispatch(setStatus(resData.data.profile.status));
        })
};

export default profileReducer;