import { commentsAPI } from "../api/api";

const ADDCOMMENT = "ADD-COMMENT";
const SET_COMMENTS="SET_COMMENTS";
const DELETE_COMMENT = "DELETE_COMMENT";

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
            case DELETE_COMMENT:
                let newCommentsArr = state.coments.filter(el => el._id !== action.id)
                return {
                    ...state,
                    coments: newCommentsArr
                };

        default:
            return state;
    }
};


export const setUsersComments=(comments)=>({type:SET_COMMENTS,usersComments:comments})
export const deleteUserComment = (id) => ({ type: DELETE_COMMENT, id })

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

export const deleteCommentFromDB = (id) => {
    return (dispatch) => {
        commentsAPI.delComment(id).then((comment) => {
            dispatch(deleteUserComment(comment._id));
        })
    }
};

export default comentsReducer;