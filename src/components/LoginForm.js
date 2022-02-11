import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const formStyle = {
  margin: 'auto',
  width: '75%',
};

const inputStyle = {
  margin: '10px 0',
};

function LoginForm() {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [disableBtn, setDisableBtn] = useState(true);
  const history = useHistory();

  useEffect(() => {
    const validateForm = () => {
      const minCaracters = 6;
      if (userEmail.includes('@')
      && userEmail.includes('.com')
      && userPassword.length > minCaracters) {
        setDisableBtn(false);
      } else {
        setDisableBtn(true);
      }
    };
    validateForm();
  }, [userEmail, userPassword]);

  const submitForm = (event) => {
    event.preventDefault();
    const localStorageEmail = {
      email: userEmail,
    };

    localStorage.setItem('mealsToken', '1');
    localStorage.setItem('cocktailsToken', '1');
    localStorage.setItem('user', JSON.stringify(localStorageEmail));

    history.push('/foods');
  };

  return (
    <form className="field" style={ formStyle }>
      <input
        className="input is-dark"
        name="email"
        type="email"
        placeholder="Enter your email address"
        data-testid="email-input"
        value={ userEmail }
        onChange={ ({ target }) => setUserEmail(target.value) }
        style={ inputStyle }
      />
      <input
        className="input is-dark"
        name="password"
        type="password"
        placeholder="Enter your password"
        data-testid="password-input"
        value={ userPassword }
        onChange={ ({ target }) => setUserPassword(target.value) }
        style={ inputStyle }
      />
      <button
        className="button is-dark is-fullwidth"
        data-testid="login-submit-btn"
        type="submit"
        disabled={ disableBtn }
        onClick={ submitForm }
        style={ inputStyle }
      >
        Login
      </button>
    </form>
  );
}

export default LoginForm;
