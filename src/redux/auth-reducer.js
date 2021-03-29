const SET_USER_DATA = "SET_USER_DATA";







let initialState = {
    userId:null,
    email:null,
    nick: null,
    // isFetching: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
     
        case SET_USER_DATA: {
            return { ...state,
                 ...action.data
                 }
        }
        default:
            return state;
    }
};

export const setUserData = (userId,email,nick) => ({ type: SET_USER_DATA, data:{userId,email,nick}});


export default authReducer;