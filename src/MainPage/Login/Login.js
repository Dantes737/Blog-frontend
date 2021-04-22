import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { Element} from '../../components/FormsControls/FormsControls';
import { required } from '../../utils/validators';
import './Login.css';
import '../../components/FormsControls/FormsControls.css';
import { login } from '../../redux/auth-reducer.js';

const MyInput=Element("input");

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div><Field component={MyInput} validate={[required]} type="text" name={"email"} placeholder={"Email"} /></div>
      <div><Field component={MyInput} validate={[required]} type="text" name={"password"} placeholder={"Password"} /></div>
      {/* <div>Remember me <Field component={MyInput} type="checkbox" name={"rememberMe"} /></div> */}
      {props.error&&<div className={"formSummaryError"}>{props.error}</div>}
      <div ><button>Login</button></div>
    </form>
  )};

const LoginReduxForm=reduxForm({
  //a unique name for form
  form:'login'
})(LoginForm)

const Login = (props) => {
  const onSubmit=(formData)=>{
    console.log(formData);
    props.login(formData.email,formData.password)
  };

  if (props.isAuth) {
    return <Redirect to={"/"}/>
  }
  return <div className="loginPage">
    <h1> LOGIN </h1>
    <LoginReduxForm onSubmit={onSubmit} />
  </div>
};

const mapStateToProps=(state)=>({
isAuth:state.auth.isAuth
})

export default connect(mapStateToProps,{login})(Login);
