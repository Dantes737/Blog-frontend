import React from 'react';
import UserComent from "./UserComent/UserComent";
import "./Coments.css";
import AddCommComp from '../../components/AddComentsComp/AddCommComp';

function Coments(props) {
    let currentPostComments = props.coments.filter(el => el.post_ID === props.postId)
    let usersComents = currentPostComments.map(com => <UserComent key={com._id} nick={com.userNick} text={com.text} />)

    return (
        <div className="coments">
            <div style={{ textAlign: "center" }}>
                <hr />
                <strong>
                    Comments
                </strong>
                <hr />
            </div>
            <div>{usersComents}</div>
            <AddCommComp postID={props.postId} />
        </div>
    )
};

export default Coments;