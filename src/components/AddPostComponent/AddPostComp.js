import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Element } from '../FormsControls/FormsControls.js';
import { required, maxLenghtCreator } from '../../utils/validators.js';
import './AddPostStyles.css';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { addPosts } from '../../redux/posts-reducer.js';



const maxLength10 = maxLenghtCreator(20);
const MyTextarea = Element("textarea");


const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={MyTextarea}
        type="text"
        name="newPostTheme"
        placeholder="Theme"
        validate={[required, maxLength10]}
      />
      <Field
        component={MyTextarea}
        type="text"
        name="newPostBody"
        placeholder="Write about something"
        validate={[required, maxLength10]}
      />
      <button className="addBtn">Add post</button>
    </form>
  )
};
const AddPostReduxForm = reduxForm({
  form: 'myAddCommentForm'
})(AddPostForm)

const AddPostPage = (props) => {
  const addNewPost = (formData) => {
    props.addPosts(
      {nick:props.userNick,
       text:formData.newPostBody,
        title:formData.newPostTheme}
        )};

  return (
    <div className="filt">
      <NavLink to="/">Go home</NavLink>
      <AddPostReduxForm onSubmit={addNewPost} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  userNick: state.auth.nick
})

export default connect(mapStateToProps, { addPosts })(AddPostPage);
