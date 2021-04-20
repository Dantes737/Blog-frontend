import { applyMiddleware, combineReducers, createStore } from "redux";
import postsReducer from "./posts-reducer";
import comentsReducer from "./coments-reducer";
import usersReducer from "./users-reducer";
import friendsReducer from "./friends-reducer";
import profileReducer from "./profile-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form";



let reducers=combineReducers({
    myPosts:postsReducer,
    myComents:comentsReducer,
    myUsers:usersReducer,
    myFriends:friendsReducer,
    myProfile:profileReducer,
    auth:authReducer,
    form:formReducer

});
let store=createStore(reducers,applyMiddleware(thunkMiddleware));


export default store ;