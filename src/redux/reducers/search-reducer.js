import * as actionTypes from '../actions/actionTypes';

const initialState = {
  query: "",
  moviesCount: 0,
  movies: [],
  movieDetail: {},
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_SEARCHED_QUERY:
      return {
        ...state,
        query: action.payload.query,
      };
    case actionTypes.ADD_SEARCHED_MOVIES:
      return {
        ...state,
        movies: [...state.movies, ...action.movies],
      };
    case actionTypes.RESET_SEARCHED_MOVIES:
      return {
        ...state,
        movies: [],
      };
    case actionTypes.SET_SEARCHED_MOVIES_COUNT:
      return {
        ...state,
        moviesCount: action.count,
      };
    case actionTypes.SET_SEARCHED_MOVIE_DETAIL:
      return {
        ...state,
        movieDetail: action.detail,
      };
    default:
      return state;
  }
};

export default searchReducer;
