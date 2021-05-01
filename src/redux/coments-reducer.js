import { commentsAPI } from "../api/api";

const ADDCOMMENT = "ADD-COMMENT";
const SET_COMMENTS="SET_COMMENTS"

let initialState = {
    coments: []
}

const comentsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_COMMENTS:
            return{
                ...state,coments:action.usersComments
            };
        case ADDCOMMENT:
            return {
                ...state,
                coments: [...state.coments,
                { id: 1998, nick: "Dantes", text: action.text }
                ]
            };

        default:
            return state;
    }
};


export const setUsersComments=(comments)=>({type:SET_COMMENTS,usersComments:comments})
// export const addComentActionCreator = (textInp) => {
//     return { type: ADDCOMMENT, text: textInp }
// };
export const deleteCommentFromDB=(id)=>{
    commentsAPI.delComment(id)
    // .then((postsData)=>{
    //     dispatch(setUsersPosts(postsData))
    // })
};
export const getCommentsFromDB=()=>(dispatch)=>{
    commentsAPI.getComments().then((commentsData)=>{
        dispatch(setUsersComments(commentsData))
    })
};
export const getOnlyUserComents=(nick)=>(dispatch)=>{
    commentsAPI.getUserComments(nick).then((commentsData)=>{
        dispatch(setUsersComments(commentsData))
    })
};

export const addComments=(data)=>(dispatch)=>{
    commentsAPI.addNewComment(data).then((commentsData)=>{
        dispatch(setUsersComments(commentsData))
    })
};

export default comentsReducer;