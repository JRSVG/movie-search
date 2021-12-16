import * as actionTypes from './actionTypes';

export const setSearchedQuery = (payload) => {
    return {
      type: actionTypes.SET_SEARCHED_QUERY,
      query: payload.query,
    };
  };
  
  export const fetchMovies = (payload) => {
    return {
      type: actionTypes.FETCH_MOVIES,
      payload,
    };
  };
  
  export const addSearchedMovies = (movies) => {
    return {
      type: actionTypes.ADD_SEARCHED_MOVIES,
      movies: movies,
    };
  };
  
  export const resetSearchedMovies = () => {
    return {
      type: actionTypes.RESET_SEARCHED_MOVIES,
    };
  };
  
  export const setSearchedMoviesCount = (count) => {
    return {
      type: actionTypes.SET_SEARCHED_MOVIES_COUNT,
      count: count
    };
  };
  
  export const setSearchedMovieDetail = (detail) => {
    return {
      type: actionTypes.SET_SEARCHED_MOVIE_DETAIL,
      detail
    };
  };
