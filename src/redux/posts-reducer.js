const ADDPOST = "ADD-POST";

let initialState = {
    posts: [
        {
            id: 63,
            img: "https://klike.net/uploads/posts/2019-01/1547365376_1.jpg",
            nick: "Dantes",
            text: "my text jhcjhchsdhjdhvjs"
        },
        {
            id: 13,
            img: "https://agronews.ua/wp-content/uploads/2020/02/maxresdefault-7.jpg",
            nick: "pony",
            text: "sdcsdc dscsdc sdcmy text jhcjhchsdhjdhvjs"
        },
        {
            id: 23,
            img: "https://st.depositphotos.com/1899425/1623/i/600/depositphotos_16232649-stock-photo-moraine-lake-sunrise-colorful-landscape.jpg",
            nick: "Kapibara",
            text: "Hello best programist"
        }
    ]
}

const postsReducer = (state = initialState, action) => {//якщо state не прийшов ,initialState використовуэться за замовчуванням

    switch (action.type) {
        case ADDPOST:

            // let newPost = {
            // id: 1229,
            // img: "https://klike.net/uploads/posts/2019-01/1547365376_1.jpg",
            // nick: "Pikachu",
            // text: action.text
            // };
            // let stateCopy = { ...state };
            // stateCopy.posts = [...state.posts];
            // stateCopy.posts.push(newPost);
            // return stateCopy;
            
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
            }

        default:
            return state;
    }

}

export const addPostActionCreator = (textInp) => {
    return { type: ADDPOST, text: textInp }
};

export default postsReducer;
