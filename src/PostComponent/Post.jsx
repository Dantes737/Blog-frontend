import React from 'react';
import './Post.css';
import Coments from "./Coments/Coments";




function Post(props) {


    return (
        <div className="post">
            <div>{props.nick}</div>
            
                <img className="postImg" src={props.img} alt="Post IMG" />
            <p>{props.text}</p>
            <div>Data</div>
<Coments dispatch={props.dispatch} coments={props.coments} />
        </div>
    )
}


export default Post;