import * as actionTypes from './actionTypes';

export const addMovieToFavorites = (id) => {
  return {
    type: actionTypes.ADD_MOVIE_TO_FAVORITES,
    id,
  };
};

export const removeMovieFromFavorites = (id) => {
  return {
    type: actionTypes.REMOVE_MOVIE_FROM_FAVORITES,
    id,
  };
};
