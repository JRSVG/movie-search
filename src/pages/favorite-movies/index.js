import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import List from "../../components/List";

const FavoriteMovies = (props) => {
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  const favoriteMovieIds = useSelector((state) => state.user.favoriteMovieIds);
  const movies = useSelector((state) => state.search.movies);
  const moviesCount = favoriteMovieIds.length;

  useEffect(() => {
    dispatch({
      type: "FETCH_USERS_FAVORITE_MOVIES",
      payload: { favoriteMovieIds: favoriteMovieIds, page: 1 },
    });
  }, [favoriteMovieIds]);

    const nextPageHandler = () => {
      dispatch({ type: "FETCH_USERS_FAVORITE_MOVIES", payload: { favoriteMovieIds, page: page + 1 } });
      setPage(page + 1);
    };

  return (
    <Fragment>
      <List
        movies={movies}
        moviesCount={moviesCount}
        page={page}
        nextPageHandler={nextPageHandler}
      />
    </Fragment>
  );
};

export default FavoriteMovies;
