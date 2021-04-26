import { profileAPI } from '../api/api.js';

const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";



let initialState = {
    users: [],
    pageSize: 5,         /////////<---------------
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {

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
        case SET_USERS: {
            return { ...state, users: action.users }
        }
        default:
            return state;
    }
};

export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setUsersTotalCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });

export const getUsers = (currentPage, pageSize,authUserId) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        profileAPI.getUsers(currentPage, pageSize)
            .then((resData) => {
                let usersArr=resData.results.filter(user=>user._id!==authUserId)
                dispatch(toggleIsFetching(false));
                dispatch(setUsers(usersArr))
                dispatch(setUsersTotalCount(resData.totalCount))

            });
    };
};


export default usersReducer;