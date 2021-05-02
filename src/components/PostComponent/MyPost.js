import React from 'react';
import './MyPost.css';

const CustomePost = (props) => {
    let deleteCurrentPost = () => {
        props.deletePost(props.post_ID)
    }
    return (
        <div className="mainConteiner">
            <div>
                <img className="imgPP" src={props.img} alt="post foto" />
                <button className="deleteBtn"
                    onClick={deleteCurrentPost}
                >Delete post</button>
            </div>
            <div><h2>{props.title}</h2></div>
            <div>{props.text}</div>
        </div>
    )
};

export default CustomePost;