const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";


let initialState = {
    users: [
        {
            id: 213,
            followed: false,
            status: " I'am a boss ",
            nick: "dantesUA",
            src: "https://walkersarewelcome.org.uk/wp-content/uploads/computer-icons-google-account-icon-design-login-png-favpng-jFjxPac6saRuDE3LiyqsYTEZM.jpg"
        },
        {
            id: 33,
            followed: true,
            status: " I'am a boss ",
            nick: "neo",
            src: "https://walkersarewelcome.org.uk/wp-content/uploads/computer-icons-google-account-icon-design-login-png-favpng-jFjxPac6saRuDE3LiyqsYTEZM.jpg"
        },
        {
            id: 113,
            followed: false,
            status: " I'am a boss ",
            nick: "pony",
            src: "https://walkersarewelcome.org.uk/wp-content/uploads/computer-icons-google-account-icon-design-login-png-favpng-jFjxPac6saRuDE3LiyqsYTEZM.jpg"
        },
        {
            id: 153,
            followed: false,
            status: " I'am a boss ",
            nick: "Kapibara",
            src: "https://walkersarewelcome.org.uk/wp-content/uploads/computer-icons-google-account-icon-design-login-png-favpng-jFjxPac6saRuDE3LiyqsYTEZM.jpg"
        },
        {
            id: 923,
            followed: false,
            status: " I'am a boss ",
            nick: "Duck",
            src: "https://walkersarewelcome.org.uk/wp-content/uploads/computer-icons-google-account-icon-design-login-png-favpng-jFjxPac6saRuDE3LiyqsYTEZM.jpg"
        }

    ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return { ...u, followed: true };
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return { ...u, followed: false };
                    } return u;
                })
            };
        case SET_USERS: {
            return {
                ...state, users: [...state.users, ...action.users]
            }
        }
        default:
            return state;
    }
};

export const followAC = (userID) => ({ type: FOLLOW, userID });
export const unfollowAC = (userID) => ({ type: UNFOLLOW, userID });
export const setUsersAC = (users) => ({ type: SET_USERS, users });


export default usersReducer;