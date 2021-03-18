
let initialState = [
    {
        id: 213,
        followed:false,
        status:" I'am a boss ",
        nick: "dantesUA",
        src: "https://walkersarewelcome.org.uk/wp-content/uploads/computer-icons-google-account-icon-design-login-png-favpng-jFjxPac6saRuDE3LiyqsYTEZM.jpg"
    },
    {
        id: 33,
        followed:true,
        status:" I'am a boss ",
        nick: "neo",
        src: "https://walkersarewelcome.org.uk/wp-content/uploads/computer-icons-google-account-icon-design-login-png-favpng-jFjxPac6saRuDE3LiyqsYTEZM.jpg"
    },
    {
        id: 113,
        followed:false,
        status:" I'am a boss ",
        nick: "pony",
        src: "https://walkersarewelcome.org.uk/wp-content/uploads/computer-icons-google-account-icon-design-login-png-favpng-jFjxPac6saRuDE3LiyqsYTEZM.jpg"
    },
    {
        id: 153,
        followed:false,
        status:" I'am a boss ",
        nick: "Kapibara",
        src: "https://walkersarewelcome.org.uk/wp-content/uploads/computer-icons-google-account-icon-design-login-png-favpng-jFjxPac6saRuDE3LiyqsYTEZM.jpg"
    },
    {
        id: 923,
        followed:false,
        status:" I'am a boss ",
        nick: "Duck",
        src: "https://walkersarewelcome.org.uk/wp-content/uploads/computer-icons-google-account-icon-design-login-png-favpng-jFjxPac6saRuDE3LiyqsYTEZM.jpg"
    }

]

const usersReducer = (state = initialState,action) => {
    switch (action.type) {
        default:
            return state;          
    }
};

// export const followAC=()=>{(type:FOLLOW)}
// export const unfollow=()=>{(type:UNFOLLOW)}

export default usersReducer;