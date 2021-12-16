export function requestMoviesByQuery(payload) {
  const { query, page } = payload;
  const url = `http://omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=${query}&page=${page}&r=json`;
  return fetch(url);
}

export function requestMovieDetailById(id) {
  const url = `http://omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&i=${id}&r=json`;
  return fetch(url);
}

export function requestMovieById(id) {
  const url = `http://omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&i=${id}&plot=short&r=json`;
  return fetch(url);
}