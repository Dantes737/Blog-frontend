const ADDCOMMENT = "ADD-COMMENT";

let initialState = [
    {
        id: 33,
        nick: "Dantes",
        text: "my dlmvml,dlcmdcmltext jhcjhchsdhjdhvjs"
    },
    {
        id: 43,
        nick: "pony",
        text: "sdcsdc dscsdc sdcmy text jhcjhchsdhjdhvjs"
    },
    {
        id: 73,
        nick: "Kapibara",
        text: "Hello best vdvldvlmd,vdlvdprogramist"
    }

]

const comentsReducer = (state=initialState, action) => {

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