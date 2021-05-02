import { postsAPI } from "../api/api";

const ADDPOST = "ADD-POST";
const SET_POSTS = "SET_POSTS";
const DELETE_POST = "DELETE_POST";
let initialState = {
    posts: []
}

const postsReducer = (state = initialState, action) => {//якщо state не прийшов ,initialState використовуэться за замовчуванням

    switch (action.type) {
        case SET_POSTS:
            return {
                ...state, posts: action.usersPosts
            };
        case ADDPOST:
            return {
                ...state,
                posts: [...state.posts,
                {
                    id: 1229,
                    img: "https://klike.net/uploads/posts/2019-01/1547365376_1.jpg",
                    nick: "Pikachu",
                    text: action.text
                }
                ]
            };
        case DELETE_POST:
            let newPostsArr = state.posts.filter(el => el._id !== action.id)
            return {
                ...state,
                posts: newPostsArr
            }

        default:
            return state;
    }

}
export const setUsersPosts = (posts) => ({ type: SET_POSTS, usersPosts: posts })
export const deleteUserPost = (id) => ({ type: DELETE_POST, id })


export const getPostsFromDB = () => (dispatch) => {
    postsAPI.getPosts().then((postsData) => {
        dispatch(setUsersPosts(postsData))
    })
};

export const deletePostFromDB = (id) => {
    return (dispatch) => {
        postsAPI.delPost(id).then((post) => {
            dispatch(deleteUserPost(post._id));
        })
    }
};


export const getOnlyUserPosts = (nick) => (dispatch) => {
    postsAPI.getUserPosts(nick).then((postsData) => {
        dispatch(setUsersPosts(postsData))
    })
};
export const addPosts = (data) => (dispatch) => {
    postsAPI.addNewPost(data).then((postsData) => {
        dispatch(setUsersPosts(postsData))
    })
};

export default postsReducer;
