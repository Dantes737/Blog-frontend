import React from 'react';
import './MyComments.css';

const CustomeComments = (props) => {
    let deleteCurrentComment = () => {
        props.deleteComment(props.comment_ID)
    }
    return (
        <div className="mainConteiner">
            <div>{props.text}

                <button className="deleteComBtn"
                    onClick={deleteCurrentComment}
                >Delete comment</button>
            </div>

        </div>
    )
};

export default CustomeComments;