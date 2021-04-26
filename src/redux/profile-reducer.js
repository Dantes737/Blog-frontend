import { profileAPI } from '../api/api.js';

const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_FOLLOWING_PROGRES = "TOGGLE_FOLLOWING_PROGRES";

let initialState = {
    profile: null,
    status: "",
    isFetching: false,
    followingInProgres: []
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
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            };
        case TOGGLE_FOLLOWING_PROGRES:
            return {
                ...state,
                followingInProgres: action.isFetching
                    ?
                    [...state.followingInProgres, action.userNICK]
                    :
                    state.followingInProgres.filter(nick => nick !== action.userNICK)
            };
        default:
            return state;
    }
};

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const toggleFollowingProgres = (isFetching, userNICK) => ({ type: TOGGLE_FOLLOWING_PROGRES, isFetching, userNICK });

export const getUserProfile = (userId) => (dispatch) => {
    profileAPI.getProfile(userId)
        .then((resData) => {
            dispatch(setUserProfile(resData.user));
        })
};

export const updateStatus = (user) => (dispatch) => {
    profileAPI.updateStatus(user)
        .then((resData) => {
            dispatch(setStatus(resData.data.profile.status));
        })
};

export const follow = (followData) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgres(true, followData.nick));
        profileAPI.getFollowed(followData)
            .then((data) => {
                dispatch(setUserProfile(data.profile));
                dispatch(toggleFollowingProgres(false, followData.nick));
            })
    };
};

export const unfollow = (followData) => {
    return (dispatch) => {

        dispatch(toggleFollowingProgres(true, followData.nick));
        profileAPI.getUnfollowed(followData)
            .then((data) => {
                dispatch(setUserProfile(data.profile));
                dispatch(toggleFollowingProgres(false, followData.nick));
            })

    };
};


export default profileReducer;