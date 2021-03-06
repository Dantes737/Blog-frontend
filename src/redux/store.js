import postsReducer from "./posts-reducer";
import comentsReducer from "./coments-reducer";


let store = {
    _state: {
        myUsers: [
            {
                id: 213,
                nick: "dantesUA",
                src: "https://walkersarewelcome.org.uk/wp-content/uploads/computer-icons-google-account-icon-design-login-png-favpng-jFjxPac6saRuDE3LiyqsYTEZM.jpg"
            },
            {
                id: 33,
                nick: "neo",
                src: "https://walkersarewelcome.org.uk/wp-content/uploads/computer-icons-google-account-icon-design-login-png-favpng-jFjxPac6saRuDE3LiyqsYTEZM.jpg"
            },
            {
                id: 113,
                nick: "pony",
                src: "https://walkersarewelcome.org.uk/wp-content/uploads/computer-icons-google-account-icon-design-login-png-favpng-jFjxPac6saRuDE3LiyqsYTEZM.jpg"
            },
            {
                id: 153,
                nick: "Kapibara",
                src: "https://walkersarewelcome.org.uk/wp-content/uploads/computer-icons-google-account-icon-design-login-png-favpng-jFjxPac6saRuDE3LiyqsYTEZM.jpg"
            },
            {
                id: 923,
                nick: "Duck",
                src: "https://walkersarewelcome.org.uk/wp-content/uploads/computer-icons-google-account-icon-design-login-png-favpng-jFjxPac6saRuDE3LiyqsYTEZM.jpg"
            }
        ],
        myPosts: [
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
        ],
        myComents: [
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
        ],
        myFriends: [
            {
                id: 11,
                nick: "dantesUA",
                src: "https://walkersarewelcome.org.uk/wp-content/uploads/computer-icons-google-account-icon-design-login-png-favpng-jFjxPac6saRuDE3LiyqsYTEZM.jpg"
            },
            {
                id: 22,
                nick: "neo",
                src: "https://walkersarewelcome.org.uk/wp-content/uploads/computer-icons-google-account-icon-design-login-png-favpng-jFjxPac6saRuDE3LiyqsYTEZM.jpg"
            },
            {
                id: 33,
                nick: "pony",
                src: "https://walkersarewelcome.org.uk/wp-content/uploads/computer-icons-google-account-icon-design-login-png-favpng-jFjxPac6saRuDE3LiyqsYTEZM.jpg"
            },
            {
                id: 44,
                nick: "Kapibara",
                src: "https://walkersarewelcome.org.uk/wp-content/uploads/computer-icons-google-account-icon-design-login-png-favpng-jFjxPac6saRuDE3LiyqsYTEZM.jpg"
            },
            {
                id: 55,
                nick: "Duck",
                src: "https://walkersarewelcome.org.uk/wp-content/uploads/computer-icons-google-account-icon-design-login-png-favpng-jFjxPac6saRuDE3LiyqsYTEZM.jpg"
            }
        ]
    },
    _callSubscriber() {
        console.log('State changed');
    },
    subscriber(observer) {
        this._callSubscriber = observer
    },
    getState() {
        return this._state
    },
    dispatch(action) {

        this._state.myPosts = postsReducer(this._state.myPosts, action);
        this._state.myComents = comentsReducer(this._state.myComents, action);

        this._callSubscriber();

    }
}







export default store;