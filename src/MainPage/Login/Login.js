import React from 'react';
import { NavLink } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import './Login.css';

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div><Field component={"input"} type="text" name={"email"} placeholder={"Email"} /></div>
      <div><Field component={"input"} type="text" name={"password"} placeholder={"Password"} /></div>
      <div>Remember me <Field component={"input"} type="checkbox" name={"rememberMe"} /></div>
      <div><button>Login</button></div>
    </form>
  )};

const LoginReduxForm=reduxForm({
  //a unique name for form
  form:'login'
})(LoginForm)

const Login = (props) => {
  const onSubmit=(formData)=>{
    console.log(formData);
  }
  return <div className="loginPage">
    <NavLink to="/">Go home</NavLink>
    <h1> LOGIN </h1>
    <LoginReduxForm onSubmit={onSubmit} />
  </div>
};

export default Login;
