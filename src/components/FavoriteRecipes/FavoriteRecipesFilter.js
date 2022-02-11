import React from 'react';

import { PropTypes } from 'prop-types';

import '../../css/FavoriteRecipesFilter.css';

function FavoriteRecipesFilter({ filterFavoriteRecipes }) {
  return (
    <div
      className="buttons"
    >
      <button
        type="button"
        className="button is-dark is-fullwidth"
        data-testid="filter-by-all-btn"
        name="all"
        onClick={ filterFavoriteRecipes }
      >
        All
      </button>
      <button
        className="button is-dark is-fullwidth"
        type="button"
        data-testid="filter-by-food-btn"
        name="food"
        onClick={ filterFavoriteRecipes }
      >
        Food
      </button>
      <button
        type="button"
        className="button is-dark is-fullwidth"
        data-testid="filter-by-drink-btn"
        name="drink"
        onClick={ filterFavoriteRecipes }
      >
        Drinks
      </button>
    </div>
  );
}

FavoriteRecipesFilter.propTypes = {
  filterFavoriteRecipes: PropTypes.func.isRequired,
};

export default FavoriteRecipesFilter;
