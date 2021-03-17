import React from 'react';
import './Post.css';
import ComentsContainer from "./Coments/ComentsContainer";




function Post(props) {


    return (
        <div className="post">
            <div>{props.nick}</div>
            
                <img className="postImg" src={props.img} alt="Post IMG" />
            <p>{props.text}</p>
            <div>Data</div>
<ComentsContainer coments={props.coments} />
        </div>
    )
}


export default Post;