import React from 'react';
import UserComent from "./UserComent/UserComent";
import "./Coments.css";
import AddCommComp from '../../components/AddComentsComp/AddCommComp';

function Coments(props) {

    let usersComents = props.coments.map(com => <UserComent key={com._id} data={com.date} nick={com.userNick} text={com.text} />)

    return (
        <div className="coments">
            <div>{usersComents}</div>
            <AddCommComp postID={props.postId} />
        </div>
    )
};

export default Coments;