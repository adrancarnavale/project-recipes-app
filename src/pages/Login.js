import React from 'react';
import LoginForm from '../components/LoginForm';

const heroTitleStyle = {
  width: 'fit-content',
  margin: 'auto',
};

function Login() {
  return (
    <>
      <div style={ { paddingTop: '100px', paddingBottom: '75px' } }>
        <h1 className="title is-4" style={ heroTitleStyle }>Bem vindo ao</h1>
        <h1 className="title is-4" style={ heroTitleStyle }>Code And Cooking</h1>
      </div>
      <LoginForm />
    </>
  );
}

export default Login;
