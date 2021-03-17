import { combineReducers, createStore } from "redux";
import postsReducer from "./posts-reducer";
import comentsReducer from "./coments-reducer";
import usersReducer from "./users-reducer";
import friendsReducer from "./friends-reducer";



let reducers=combineReducers({
    myPosts:postsReducer,
    myComents:comentsReducer,
    myUsers:usersReducer,
    myFriends:friendsReducer

});
let store=createStore(reducers);


export default store ;