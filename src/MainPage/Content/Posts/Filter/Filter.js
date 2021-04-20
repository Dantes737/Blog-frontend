import React from 'react';
import { Field, reduxForm } from 'redux-form';
import './Filter.css';


function Filter(props) {

  let addNewPost = (values)=> {
    props.addUserPost(values.newPostBody)
  };

  return (
    <div className="filt">
      <button>Newest</button>
      <button>Older</button>
      <button>All</button>
      <AddPostReduxForm onSubmit={addNewPost}/>
    </div>
  );
};

const AddPostForm=(props)=>{
  return(
    <form onSubmit={props.handleSubmit}>
      <Field component="input" type="text" name="newPostBody" placeholder="Write about something" />
      <button className="addBtn">Add post</button>
    </form>
  )
};
const AddPostReduxForm=reduxForm({form:'myAddCommentForm'})(AddPostForm)


export default Filter;
