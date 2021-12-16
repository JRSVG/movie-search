import { call, put } from "redux-saga/effects";
import {
  requestMoviesByQuery,
  requestMovieDetailById,
  requestMovieById,
} from "../requests/movies";
import {
  setSearchedMoviesCount,
  addSearchedMovies,
  resetSearchedMovies,
  setSearchedMovieDetail,
} from "../../actions/index";

export function* handleFetchMoviesByQuery(action) {
  const { payload } = action;
  try {
    const response = yield call(() => requestMoviesByQuery(payload));
    const data = yield call([response, "json"]);

    if (data && data.Response === "True") {
      const moviesCount = data.totalResults;
      const movies = data.Search;

      yield put(setSearchedMoviesCount(moviesCount));

      if (payload.page === 1) {
        yield put(resetSearchedMovies());
      }
      yield put(addSearchedMovies(movies));
    } else {
      throw Error();
    }
  } catch (err) {
    const moviesCount = 0;
    yield put(setSearchedMoviesCount(moviesCount));
    yield put(resetSearchedMovies());
  }
}

export function* handleFetchMovieDetail(action) {
  const id = action.payload.id;
  const response = yield call(() => requestMovieDetailById(id));
  const movieDetail = yield call([response, "json"]);
  yield put(setSearchedMovieDetail(movieDetail));
}

export function* handleFetchUsersFavoriteMovies(action) {
  const { page, favoriteMovieIds } = action.payload;
  const favoriteMoviesCount = action.payload.favoriteMovieIds.length;
  const favoriteMovieIdsPerPage = favoriteMovieIds.slice(
    (page - 1) * 10,
    page * 10
  );
  let favoriteMoviesPerPage = [];

  yield put(setSearchedMoviesCount(favoriteMoviesCount));

  for (let i = 0; i < favoriteMovieIdsPerPage.length; i++) {
    const id = favoriteMovieIdsPerPage[i];
    const response = yield call(() => requestMovieById(id));
    const movie = yield call([response, "json"]);
    favoriteMoviesPerPage.push(movie);
  }

  if (page === 1) {
    yield put(resetSearchedMovies());
  }
  yield put(addSearchedMovies(favoriteMoviesPerPage));
}
