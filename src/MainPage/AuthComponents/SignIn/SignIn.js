import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Element } from '../../../components/FormsControls/FormsControls';
import { required, validatePassword, validateEmail, validateNick } from '../../../utils/validators';
import './SignIn.css';
import '../../../components/FormsControls/FormsControls.css';
import { signInUser } from '../../../redux/auth-reducer.js';

const MyInput = Element("input");

const SignInForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div><Field component={MyInput} validate={[required, validateNick]} type="text" name={"nick"} placeholder={"Nick"} /></div>
      <div><Field component={MyInput} validate={[required, validateEmail]} type="text" name={"email"} placeholder={"Email"} /></div>
      <div><Field component={MyInput} validate={[required, validatePassword]} type="password" name={"password"} placeholder={"Password"} /></div>
      {props.error && <div className={"formSummaryError"}>{props.error}</div>}
      <div ><button>Sign In</button></div>
    </form>
  )
};

const SignInReduxForm = reduxForm({
  //a unique name for form
  form: 'signIn'
})(SignInForm)

const SignIn = (props) => {

  const onSubmit = (formData) => {
    props.signInUser(formData.nick, formData.email, formData.password);
  };
  if (props.signUped) {
    return<div className="signinPage">
      <h1> SIGN IN </h1>
     <div style={{fontSize:"22px"}}><span className="signinSpan" onClick={props.changeStatus}>Now you can LogIn</span> !</div>
     </div>
  }
  return <div >
    <div className="signinPage">
      <h1> SIGN IN </h1>
      <SignInReduxForm onSubmit={onSubmit} />
      <div>Or <span className="signinSpan" onClick={props.changeStatus}>LogIn</span> if you already have account</div>
    </div>
  </div>
};

const mapStateToProps = (state) => ({
  signUped: state.auth.signUped
})

export default connect(mapStateToProps, { signInUser })(SignIn);
