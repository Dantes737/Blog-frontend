import React from 'react';
import './Post.css';
import ComentsContainer from "./Coments/ComentsContainer";




function Post(props) {


    return (
        <div className="post">
            <div>{props.nick}</div>

            <img className="postImg" src={props.img} alt="Post IMG" />
            <h2>{props.title}</h2>
            <p>{props.text}</p>
            <div>Data : {props.data}</div>
            <ComentsContainer postId={props.postID} coments={props.coments} />
        </div>
    )
}


export default Post;