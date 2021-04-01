import { usersAPI } from '../api/api.js';

const SET_USER_PROFILE = "SET_USER_PROFILE";







let initialState = {
    profile: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_PROFILE:
            return {
                ...state, profile: action.profile
            };

        default:
            return state;
    }
};

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });

export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId)
        .then((resData) => {
            dispatch(setUserProfile(resData.user));
        })

};

export default profileReducer;