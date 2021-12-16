import { takeLatest } from "redux-saga/effects";
import { handleFetchMoviesByQuery, handleFetchMovieDetail, handleFetchUsersFavoriteMovies } from './handlers/movies'

function* rootSaga() {
  yield takeLatest("FETCH_MOVIES", handleFetchMoviesByQuery);
  yield takeLatest("FETCH_MOVIE_DETAIL", handleFetchMovieDetail);
  yield takeLatest("FETCH_USERS_FAVORITE_MOVIES", handleFetchUsersFavoriteMovies);
}

export default rootSaga;
