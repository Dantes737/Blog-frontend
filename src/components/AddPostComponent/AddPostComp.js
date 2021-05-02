import React, { useState } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Element } from '../FormsControls/FormsControls.js';
import { required, maxLenghtCreator } from '../../utils/validators.js';
import './AddPostStyles.css';
// import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { addPosts } from '../../redux/posts-reducer.js';



const maxLength20 = maxLenghtCreator(20);
const maxLength200 = maxLenghtCreator(200);

const MyTextarea = Element("textarea");
const MyTitleInp = Element("input");


const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={MyTitleInp}
        type="text"
        className="titleInp"
        name="newPostTheme"
        placeholder="Theme"
        validate={[required, maxLength20]}
      />
      <Field
        component={MyTextarea}
        type="text"
        className="textInp"
        name="newPostBody"
        placeholder="Write about something"
        validate={[required, maxLength200]}
      />
      <button >Add post</button>
    </form>
  )
};
const AddPostReduxForm = reduxForm({
  form: 'myAddCommentForm'
})(AddPostForm)

const AddPostPage = (props) => {
  const [addBtnClicked, setaddBtn] = useState(false);

  function openCommentInput() {
    setaddBtn(true);
  };
  function cancelAdding() {
    setaddBtn(false);
  }

  const addNewPost = (formData) => {
    props.addPosts(
      {nick:props.userNick,
       text:formData.newPostBody,
        title:formData.newPostTheme}
        )
        setaddBtn(false);
      };

      if (addBtnClicked) {
        return (
          <div>
            <AddPostReduxForm onSubmit={addNewPost} />
            <button onClick={cancelAdding}>Cancel</button>
          </div>
        );
      }
      return (
        <div>
          <button  onClick={openCommentInput}>Add new post</button>
        </div>
      );
  // return (
  //   <div className="filt">
  //     {/* <NavLink to="/">Go home</NavLink> */}
  //     <AddPostReduxForm onSubmit={addNewPost} />
  //   </div>
  // );
};

const mapStateToProps = (state) => ({
  userNick: state.auth.nick
})

export default connect(mapStateToProps, { addPosts })(AddPostPage);
