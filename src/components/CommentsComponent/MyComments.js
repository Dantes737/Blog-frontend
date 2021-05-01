import React from 'react';
import './MyComments.css';
import { deleteCommentFromDB } from '../../redux/coments-reducer.js';

const CustomeComments = (props) => {
    let deleteCurrentComment = () => {
        console.log(props.comment_ID);
        deleteCommentFromDB(props.comment_ID)
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