import { Fragment } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { AiFillStar } from "react-icons/ai";
import classes from "./index.module.css";

const FavoriteIcon = ({ movieId }) => {

  const dispatch = useDispatch();
  const usersFavoriteMovieIds = useSelector(
    (state) => state.user.favoriteMovieIds
  );

  const isFavoriteMovie = () => {
    if (usersFavoriteMovieIds && usersFavoriteMovieIds.indexOf(movieId) >= 0) {
      return true;
    }
    return false;
  };

  const addMovieToFavoritesHandler = (movieId) => {
    if (usersFavoriteMovieIds.indexOf(movieId) < 0) {
      const newFavoriteMovieIds = usersFavoriteMovieIds.concat([movieId]);
      localStorage.setItem(
        "favoriteMovieIds",
        JSON.stringify(newFavoriteMovieIds)
      );
      dispatch({
        type: "ADD_MOVIE_TO_FAVORITES",
        payload: { id: movieId },
      });
    }
  };

  const removeMovieFromFavoritesHandler = (movieId) => {
    if (usersFavoriteMovieIds.indexOf(movieId) >= 0) {
      const newFavoriteMovieIds = usersFavoriteMovieIds.filter(
        (id) => id !== movieId
      );
      localStorage.setItem(
        "favoriteMovieIds",
        JSON.stringify(newFavoriteMovieIds)
      );
      dispatch({
        type: "REMOVE_MOVIE_FROM_FAVORITES",
        payload: { id: movieId },
      });
    }
  };

  const toggleIsFavoriteMovie = (movieId) => {
    if (isFavoriteMovie(movieId)) {
      removeMovieFromFavoritesHandler(movieId);
    } else {
      addMovieToFavoritesHandler(movieId);
    }
  };

  return (
    <Fragment>
      <AiFillStar
        className={
          isFavoriteMovie(movieId)
            ? [classes.favoriteIcon, classes.active].join(", ")
            : classes.favoriteIcon
        }
        onClick={() => toggleIsFavoriteMovie(movieId)}
      />
    </Fragment>
  );
};

export default FavoriteIcon;
