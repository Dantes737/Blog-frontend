const ADDCOMMENT = "ADD-COMMENT";

const comentsReducer = (state, action) => {

    switch (action.type) {
        case ADDCOMMENT:
            let newComment = {
                id: 1998,
                nick: "Dantes",
                text: action.text
            };
            state.push(newComment);
            return state;

        default:
            return state;
    }

    // if (action.type === ADDCOMMENT) {
    //     let newComment = {
    //         id: 1998,
    //         nick: "Dantes",
    //         text: action.text
    //     };
    //     state.push(newComment);
    // }
    // return state;

}

export const addComentActionCreator = (textInp) => {
    return { type: ADDCOMMENT, text: textInp }
};

export default comentsReducer;