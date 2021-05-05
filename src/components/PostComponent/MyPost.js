import React from 'react';
import './MyPost.css';

const CustomePost = (props) => {
    let deleteCurrentPost = () => {
        props.deletePost(props.post_ID)
    }
    return (
        <div className="mainConteiner">
            <div style={{ backgroundColor: "#c2bdce78", borderRadius: "5px" }}>
                <div>
                    <img className="imgPP" src={props.img} alt="post foto" />
                </div>
                <div><h2>{props.title}</h2></div>
                <div>{props.text}</div>
            </div>
            <button className="deleteBtn"
                onClick={deleteCurrentPost}
            >Delete post</button>
        </div>
    )
};

export default CustomePost;