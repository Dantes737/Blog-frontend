import { combineReducers, createStore } from "redux";
import postsReducer from "./posts-reducer";
import comentsReducer from "./coments-reducer";
import usersReducer from "./users-reducer";
import friendsReducer from "./friends-reducer";
import profileReducer from "./profile-reducer";




let reducers=combineReducers({
    myPosts:postsReducer,
    myComents:comentsReducer,
    myUsers:usersReducer,
    myFriends:friendsReducer,
    myProfile:profileReducer

});
let store=createStore(reducers);


export default store ;