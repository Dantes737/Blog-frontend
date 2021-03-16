const ADDPOST = "ADD-POST";

const postsReducer = (state, action) => {
switch (action.type) {
    case ADDPOST:
        let newPost = {
            id: 1229,
            img: "https://klike.net/uploads/posts/2019-01/1547365376_1.jpg",
            nick: "Pikachu",
            text: action.text
        };
        state.push(newPost);
        return state;

    default:
        return state;
}


    // if (action.type === ADDPOST) {
    //     let newPost = {
    //         id: 1229,
    //         img: "https://klike.net/uploads/posts/2019-01/1547365376_1.jpg",
    //         nick: "Pikachu",
    //         text: action.text
    //     };
    //     state.push(newPost);
    // }

    // return state;

}

export const addPostActionCreator = (textInp) => {
    return { type: ADDPOST, text: textInp }
};

export default postsReducer ;