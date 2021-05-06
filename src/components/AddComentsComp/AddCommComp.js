import React, { useState } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Element } from '../FormsControls/FormsControls.js';
import { required, maxLenghtCreator } from '../../utils/validators.js';
import './AddCommStyles.css';
import { connect } from 'react-redux';
import { addComments } from '../../redux/coments-reducer.js';



const maxLength40 = maxLenghtCreator(40);
const MyTextarea = Element("textarea");


const AddCommentForm = (props) => {

  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={MyTextarea}
        type="text"
        name="newCommentBody"
        placeholder="Write comment"
        validate={[required, maxLength40]}
      />
      <button className="addComBtn">Add comment</button>
    </form>
  )
};
const AddCommentReduxForm = reduxForm({
  form: 'myAddCommentForm'
})(AddCommentForm)

const AddCommPage = (props) => {
  const [addBtnClicked, setaddBtn] = useState(false);

  function openCommentInput() {
    setaddBtn(true);
  };
  function cancelAdding() {
    setaddBtn(false);
  }

  const addNewComment = (formData) => {
    props.addComments(
      {
        post_id: props.postID,
        nick: props.userNick,
        text: formData.newCommentBody
      }
    );
    setaddBtn(false);
  };

  if (addBtnClicked) {
    return (
      <div>
        <AddCommentReduxForm onSubmit={addNewComment} />
        <button onClick={cancelAdding}>Cancel</button>
      </div>
    );
  }
  return (
    <div>
      <button className="addComBtn" onClick={openCommentInput}>Add new comment</button>
    </div>
  );

};

const mapStateToProps = (state) => ({
  userNick: state.auth.nick
})

export default connect(mapStateToProps, { addComments })(AddCommPage);
