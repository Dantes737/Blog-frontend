import React, { useState } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Element } from '../FormsControls/FormsControls.js';
import { required, maxLenghtCreator } from '../../utils/validators.js';
import './EditComp.css';
import { connect } from 'react-redux';
import { updateProfile } from '../../redux/profile-reducer';

const maxLength10 = maxLenghtCreator(20);
const MyTextarea = Element("textarea");


const EditForm = (props) => {

  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={MyTextarea}
        type="text"
        name="userAge"
        placeholder="Enter your age"
        validate={[required, maxLength10]}
      />
      <Field
        component={MyTextarea}
        type="text"

        name="userCountry"
        placeholder="Enter your country"
        validate={[required, maxLength10]}
      />
      <Field
        component={MyTextarea}
        type="text"
        name="userCity"
        placeholder="Enter your city"
        validate={[required, maxLength10]}
      />
      <button className="addBtn">Update</button>
    </form>
  )
};
const EditReduxForm = reduxForm({
  form: 'myEditForm'
})(EditForm)

const EditPage = (props) => {
  const [addBtnClicked, setaddBtn] = useState(false);

  function openEditor() {
    setaddBtn(true);
  };
  function cancelAdding() {
    setaddBtn(false);
  }

  const editUserProf = (formData) => {
    props.updateProfile(
      {
        profileID: props.id,
        age: formData.userAge,
        country: formData.userCountry,
        city: formData.userCity
      }
    );
    setaddBtn(false);
  };

  if (addBtnClicked) {
    return (
      <div>
        < EditReduxForm onSubmit={editUserProf} />
        <button onClick={cancelAdding}>Cancel</button>
      </div>
    );
  }
  return (
    <div>
      <button onClick={openEditor}>Update profile</button>  or doubleClick on Name and Status fields to change !
    </div>
  );

};

const mapStateToProps = (state) => ({
  id: state.myProfile.profile._id
})

export default connect(mapStateToProps, { updateProfile })(EditPage);
