import { profileAPI } from '../api/api.js';

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_FOLLOWING_PROGRES = "TOGGLE_FOLLOWING_PROGRES";




let initialState = {
    users: [],
    pageSize: 4,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgres: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u._id === action.userID) {
                        return { ...u, followed: true };
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state, users: state.users.map(u => {
                    if (u._id === action.userID) {
                        return { ...u, followed: false };
                    } return u;
                })
            };
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            };
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state, totalUsersCount: action.count
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
                    [...state.followingInProgres, action.userID]
                    :
                    state.followingInProgres.filter(id => id !== action.userID)
            };
        case SET_USERS: {
            return { ...state, users: action.users }
        }
        default:
            return state;
    }
};

export const followSucces = (userID) => ({ type: FOLLOW, userID });
//==================АБО========================
//export const followAC = (userID) => ({ type: FOLLOW, userID:userID });
export const unfollowSucces = (userID) => ({ type: UNFOLLOW, userID });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setUsersTotalCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const toggleFollowingProgres = (isFetching, userID) => ({ type: TOGGLE_FOLLOWING_PROGRES, isFetching, userID });

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        profileAPI.getUsers(currentPage, pageSize)
            .then((resData) => {
                dispatch(toggleIsFetching(false));
                dispatch(setUsers(resData.results))
                dispatch(setUsersTotalCount(resData.totalCount))

            });
    };
};

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgres(true, userId));
        profileAPI.getFollowed(userId)
            .then((data) => {
                if (data.success === true) {
                    dispatch(followSucces(userId))
                }
                dispatch(toggleFollowingProgres(false, userId));
            })
    };
};

export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgres(true, userId));
        profileAPI.getUnfollowed(userId)
            .then((data) => {
                if (data.success === true) {
                    dispatch(unfollowSucces(userId))
                }
                dispatch(toggleFollowingProgres(false, userId));
            })
    };
};

export default usersReducer;