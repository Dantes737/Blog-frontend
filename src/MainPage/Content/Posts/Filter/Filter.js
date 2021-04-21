import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Element} from '../../../../components/FormsControls/FormsControls.js';
import { required,maxLenghtCreator} from '../../../../utils/validators.js';
import './Filter.css';

const maxLength10=maxLenghtCreator(20);
const MyTextarea=Element("textarea");

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


export default Filter;
