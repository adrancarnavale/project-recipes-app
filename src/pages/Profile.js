import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

import '../css/Profile.css';

const buttonStyle = {
  width: '200px',
  margin: '5px',
};

export default function Profile() {
  let user = JSON.parse(localStorage.getItem('user'));
  user = user || { email: '' };
  return (
    <div>
      <Header
        title
        profile
        pageTitle="Profile"
      />
      <div className="mainContent">
        <p className="subtitle" data-testid="profile-email">{user.email}</p>
        <div className="buttons">
          <Link to="/done-recipes">
            <button
              className="button is-dark is-fullwidth"
              data-testid="profile-done-btn"
              type="button"
              style={ buttonStyle }
            >
              Done Recipes
            </button>
          </Link>
          <Link to="/favorite-recipes">
            <button
              className="button is-dark is-fullwidth"
              data-testid="profile-favorite-btn"
              type="button"
              style={ buttonStyle }
            >
              Favorite Recipes
            </button>
          </Link>
          <Link to="/">
            <button
              className="button is-dark is-fullwidth"
              data-testid="profile-logout-btn"
              type="button"
              onClick={ () => localStorage.clear() }
              style={ buttonStyle }
            >
              Logout
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
