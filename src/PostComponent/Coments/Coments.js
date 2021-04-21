import React from 'react';
import UserComent from "./UserComent/UserComent";
import "./Coments.css";
import { Field, reduxForm } from 'redux-form';

function Coments(props) {

    let addNewComment = (values) => {
        props.addUserComent(values.newComentBody)
    };
    let usersComents = props.coments.map(c => <UserComent key={c.id} nick={c.nick} text={c.text} />)

    return (
        <div className="coments">
            <AddComentReduxForm onSubmit={addNewComment} />
            <div>{usersComents}</div>
        </div>
    )
};

const AddComentForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className="textInp">
                <Field
                 component="textarea" 
                 name="newComentBody" 
                 placeholder="Enter your comment" 
                 />
            </div>
            <button className="addComBtn">Add  coment</button>
        </form>
    )
};
const AddComentReduxForm = reduxForm({ form: 'myAddCommentForm' })(AddComentForm)

export default Coments;