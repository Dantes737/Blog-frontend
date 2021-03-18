const ADDCOMMENT = "ADD-COMMENT";

let initialState = {
    coments: [
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
}

const comentsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADDCOMMENT:
            ///////////////////Можна 2 способами

            // let newComment = {
            //     id: 1998,
            //     nick: "Dantes",
            //     text: action.text
            // };

            // let stateCopy = { ...state };
            // stateCopy.coments = [...state.coments];
            // stateCopy.coments.push(newComment);
            // return stateCopy;

            /////////АБО////////////
            
            return {
                ...state,
                coments: [...state.coments,
                { id: 1998, nick: "Dantes", text: action.text }
                ]
            };
        //////////////////////////////////


        default:
            return state;
    }

}

export const addComentActionCreator = (textInp) => {
    return { type: ADDCOMMENT, text: textInp }
};

export default comentsReducer;