export function requestMoviesByQuery(payload) {
  const { query, page } = payload;
  const url = `https://omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=${query}&page=${page}&r=json`;
  console.log('request to: ', url);
  return fetch(url);
}

export function requestMovieDetailById(id) {
  const url = `https://omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&i=${id}&r=json`;
  return fetch(url);
}

export function requestMovieById(id) {
  const url = `https://omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&i=${id}&plot=short&r=json`;
  return fetch(url);
}
