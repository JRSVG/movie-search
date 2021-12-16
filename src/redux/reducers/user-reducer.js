import * as actionTypes from '../actions/actionTypes';

const initialState = {
  favoriteMovieIds: [],
  favoriteMovies: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_USERS_FAVORITE_MOVIE_IDS:
      return {
        ...state,
        favoriteMovieIds: action.payload.ids
      };
    case actionTypes.ADD_MOVIE_TO_FAVORITES:
      if (state.favoriteMovieIds.indexOf(action.id) < 0) {
        return {
          ...state,
          favoriteMovieIds: state.favoriteMovieIds.concat([action.payload.id]),
        };
      }
    case actionTypes.REMOVE_MOVIE_FROM_FAVORITES:
      return {
        ...state,
        favoriteMovieIds: state.favoriteMovieIds.filter(
          (id) => id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

export default userReducer;
