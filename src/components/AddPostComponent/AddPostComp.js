import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Element} from '../FormsControls/FormsControls.js';
import { required,maxLenghtCreator} from '../../utils/validators.js';
import './AddPostStyles.css';
import { NavLink } from 'react-router-dom';



const maxLength10=maxLenghtCreator(20);
const MyTextarea=Element("textarea");

function AddPostPage(props) {

  let addNewPost = (values)=> {
    props.addUserPost(values.newPostBody)
  };

  return (
    <div className="filt">
      <NavLink to="/">Go home</NavLink>
      <AddPostReduxForm onSubmit={addNewPost}/>
    </div>
  );
};

const AddPostForm=(props)=>{
  return(
    <form onSubmit={props.handleSubmit}>
      <Field 
      component={MyTextarea}
       type="text" 
       name="newPostTheme" 
       placeholder="Theme"
       validate={[required,maxLength10]}
        />
         <Field 
      component={MyTextarea}
       type="text" 
       name="newPostBody" 
       placeholder="Write about something"
       validate={[required,maxLength10]}
        />
      <button className="addBtn">Add post</button>
    </form>
  )
};
const AddPostReduxForm=reduxForm({form:'myAddCommentForm'})(AddPostForm)


export default AddPostPage;
